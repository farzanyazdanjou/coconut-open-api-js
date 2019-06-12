import { AxiosInstance } from 'axios';

import { combine } from '../helpers/filters';
import { Filterable, Pageable } from '../index';
import Conditional, { ConditionalResource } from './conditional';

export interface LocationFilter {
  assigned?: boolean;
  invitable?: number;
  services?: number | number[] | string | string[];
  user?: number | string;
  virtual?: number;
}

export interface LocationParameters {
  assignments?: boolean;
  invite_only?: number;
  service?: number | number[] | string | string[];
  user?: number | string;
}

export interface LocationResource extends Pageable, ConditionalResource {
  assigned(assigned: boolean): this;

  containing(user: number | string): this;

  invitable(): this;

  physical(): this;

  providing(services: number | number[] | string | string[]): this;

  virtual(): this;
}

export default class Location extends Conditional implements LocationResource {
  protected client: AxiosInstance;
  protected filters: LocationFilter;
  protected page: number | null;
  protected sortable: string | null;
  protected limit: number | null;

  constructor(client: AxiosInstance) {
    super();

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
    let params: Filterable<LocationFilter> = {};

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

    return await this.client.get('locations', { params });
  }

  public invitable(): this {
    this.filters.invitable = 1;

    return this;
  }

  public on(page: number): this {
    this.page = page;

    return this;
  }

  public physical(): this {
    this.filters.virtual = 0;

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

  public virtual(): this {
    this.filters.virtual = 1;

    return this;
  }

  protected params(): LocationParameters {
    const params: LocationParameters = {};

    if (typeof this.filters.assigned !== 'undefined') {
      params.assignments = this.filters.assigned;
    }

    if (typeof this.filters.invitable !== 'undefined') {
      params.invite_only = this.filters.invitable;
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
