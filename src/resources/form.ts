import { AxiosInstance } from 'axios';

import Forms from '../constants/forms';
import { combine } from '../helpers/filters';
import { Filterable, Pageable } from '../index';

export interface FormFilter {
  type?: number;
}

export interface FormFilterable<T> extends Filterable<T> {
  include?: string;
}

export interface FormUrlParameters {
  include?: string;
}

interface FormParameters {
  type?: number;
}

export interface FormResource extends Pageable {
  cancellations(): this;
}

export default class Form implements FormResource {
  protected client: AxiosInstance;
  protected filters: FormFilter;
  protected page: number | null;
  protected parameters: FormUrlParameters;
  protected sortable: string | null;
  protected limit: number | null;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.filters = {};
    this.page = null;
    this.parameters = {};
    this.sortable = null;
    this.limit = null;
  }

  public cancellations(): this {
    this.filters.type = Forms.CANCELLATION;
    this.parameters.include = 'questions.options';

    return this;
  }

  public async get(): Promise<any> {
    const parameters = this.params();
    let params: FormFilterable<FormFilter> = {};

    if (Object.keys(parameters).length) {
      params = combine(params, parameters);
    }

    if (this.parameters.include) {
      params.include = this.parameters.include;
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

    return await this.client.get('forms', { params });
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

  protected params(): FormParameters {
    const params: FormParameters = {};

    if (typeof this.filters.type !== 'undefined') {
      params.type = this.filters.type;
    }

    return params;
  }
}
