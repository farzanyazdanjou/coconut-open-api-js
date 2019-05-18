import { AxiosInstance } from 'axios';

import { combine } from '../helpers/filters';
import { Filterable, Pageable } from '../index';
import Conditional, { ConditionalResource } from './conditional';

export interface QuestionFilter {
  services?: number | number[] | string | string[];
}

export interface QuestionParameters {
  service?: number | number[] | string | string[];
}

export interface QuestionResource extends Pageable, ConditionalResource {
  for(services: number | number[] | string | string[]): this;
}

export default class Question extends Conditional implements QuestionResource {
  protected client: AxiosInstance;
  protected filters: QuestionFilter;
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

  public for(services: number | number[] | string | string[]): this {
    this.filters.services = services;

    return this;
  }

  public async get(): Promise<any> {
    const parameters = this.params();
    let params: Filterable<QuestionParameters> = {};

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

    return await this.client.get('questions', { params });
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

  protected params(): QuestionParameters {
    const params: QuestionParameters = {};

    if (typeof this.filters.services !== 'undefined') {
      params.service = this.filters.services;
    }

    return params;
  }
}
