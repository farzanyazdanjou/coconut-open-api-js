import { AxiosInstance } from 'axios';

import { Resource } from '../index';

export interface FormResource extends Resource {
  cancellations(): this;
}

export default class Form implements FormResource {
  protected client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  public cancellations(): this {
    return this;
  }

  public get(): Promise<any> {
    return new Promise((resolve) => resolve());
  }
}
