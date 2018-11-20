import { AxiosInstance } from 'axios';

import { Filterable, Pageable } from '../index';

export interface LocationFilter {
  assigned?: boolean;
  services?: number | number[] | string | string[];
  user?: number | string;
}

export interface LocationParameters {
  assigned?: boolean;
  service?: number | number[] | string | string[];
  user?: number | string;
}

export interface LocationResource extends Pageable {
  assigned(assigned: boolean): this;

  containing(user: number | string): this;

  providing(services: number | number[] | string | string[]): this;
}

export default class Location implements LocationResource {
  protected client: AxiosInstance;
  protected filters: LocationFilter;
  protected page: number | null;
  protected sortable: string | null;
  protected limit: number | null;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.filters = {};
    this.page = null;
    this.sortable = null;
    this.limit = null;
  }

  public assigned(assigned: boolean = true): this {
    this.filters.assigned = assigned;

    return this;
  }

  public containing(user: number | string): this {
    this.filters.user = user;

    return this;
  }

  public async get(): Promise<any> {
    const parameters = this.params();
    const params: Filterable<LocationParameters> = {};

    if (Object.keys(parameters).length) {
      params.filters = parameters;
    }

    if (this.limit) {
      params.limit = this.limit;
    }

    if (this.page) {
      params.page = this.page;
    }

    if (this.sortable) {
      params.sort = this.sortable;
    }

    return await this.client.get('locations', { params });
  }

  public on(page: number): this {
    this.page = page;

    return this;
  }

  public providing(services: number | number[] | string | string[]): this {
    this.filters.services = services;

    return this;
  }

  public sortBy(sortable: string): this {
    this.sortable = sortable;

    return this;
  }

  public take(limit: number): this {
    this.limit = limit;

    return this;
  }

  protected params(): LocationParameters {
    const params: LocationParameters = {};

    if (typeof this.filters.assigned !== 'undefined') {
      params.assigned = this.filters.assigned;
    }

    if (typeof this.filters.services !== 'undefined') {
      params.service = this.filters.services;
    }

    if (typeof this.filters.user !== 'undefined') {
      params.user = this.filters.user;
    }

    return params;
  }
}
