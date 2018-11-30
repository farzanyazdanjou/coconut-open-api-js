import { AxiosInstance } from 'axios';

import { combine } from '../helpers/filters';
import { Filterable, Pageable } from '../index';

export interface ServiceFilter {
  assigned?: boolean;
  category?: number | string;
  location?: number | string;
  user?: number | string;
}

export interface ServiceParameters {
  assigned?: boolean;
  category?: number | string;
  location?: number | string;
  user?: number | string;
}

export interface ServiceResource extends Pageable {
  assigned(assigned: boolean): this;

  at(location: number | string): this;

  by(user: number | string): this;

  in(category: number | string): this;
}

export default class Service implements ServiceResource {
  protected client: AxiosInstance;
  protected filters: ServiceFilter;
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

  public by(user: number | string): this {
    this.filters.user = user;

    return this;
  }

  public async get(): Promise<any> {
    const parameters = this.params();
    let params: Filterable<ServiceParameters> = {};

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

    return await this.client.get('services', { params });
  }

  public in(category: number | string): this {
    this.filters.category = category;

    return this;
  }

  public on(page: number): this {
    this.page = page;

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

  protected params(): ServiceParameters {
    const params: ServiceParameters = {};

    if (typeof this.filters.assigned !== 'undefined') {
      params.assigned = this.filters.assigned;
    }

    if (typeof this.filters.category !== 'undefined') {
      params.category = this.filters.category;
    }

    if (typeof this.filters.location !== 'undefined') {
      params.location = this.filters.location;
    }

    if (typeof this.filters.user !== 'undefined') {
      params.user = this.filters.user;
    }

    return params;
  }
}
