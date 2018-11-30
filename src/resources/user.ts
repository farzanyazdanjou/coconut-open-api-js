import { AxiosInstance } from 'axios';

import { combine } from '../helpers/filters';
import { Filterable, Pageable } from '../index';

export interface UserFilter {
  assigned?: boolean;
  services?: number | number[] | string | string[];
  location?: number | string;
}

export interface UserParameters {
  assigned?: boolean;
  service?: number | number[] | string | string[];
  location?: number | string;
}

export interface UserResource extends Pageable {
  assigned(assigned: boolean): this;

  at(location: number | string): this;

  performing(services: number | number[] | string | string[]): this;
}

export default class User implements UserResource {
  protected client: AxiosInstance;
  protected filters: UserFilter;
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

  public at(location: number | string): this {
    this.filters.location = location;

    return this;
  }

  public async get(): Promise<any> {
    const parameters = this.params();
    let params: Filterable<UserParameters> = {};

    if (Object.keys(parameters).length) {
      params = combine(params, parameters);
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

    return await this.client.get('users', { params });
  }

  public on(page: number): this {
    this.page = page;

    return this;
  }

  public performing(services: number | number[] | string | string[]): this {
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

  protected params(): UserParameters {
    const params: UserParameters = {};

    if (typeof this.filters.assigned !== 'undefined') {
      params.assigned = this.filters.assigned;
    }

    if (typeof this.filters.services !== 'undefined') {
      params.service = this.filters.services;
    }

    if (typeof this.filters.location !== 'undefined') {
      params.location = this.filters.location;
    }

    return params;
  }
}
