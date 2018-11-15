import { AxiosInstance } from 'axios';

import { Filterable, UserFilter } from '../types/filters';
import { UserParameters } from '../types/parameters';
import { UserResource } from '../types/resources';

export default class User implements UserResource {
  protected client: AxiosInstance;
  protected filters: UserFilter;
  protected sortable: string | null;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.filters = {};
    this.sortable = null;
  }

  public assigned(assigned: boolean = true): this {
    this.filters.assigned = assigned;

    return this;
  }

  public at(locations: number | string): this {
    this.filters.locations = locations;

    return this;
  }

  public get(): Promise<any> {
    const values = this.params();
    const params: Filterable<UserFilter> = {};

    if (Object.keys(params).length) {
      params.filters = values;
    }

    if (this.sortable) {
      params.sort = this.sortable;
    }

    return this.client.get('users', { params });
  }

  public performing(services: number | number[] | string | string[]): this {
    this.filters.services = services;

    return this;
  }

  public sortBy(sortable: string): this {
    this.sortable = sortable;

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

    if (typeof this.filters.locations !== 'undefined') {
      params.location = this.filters.locations;
    }

    return params;
  }
}
