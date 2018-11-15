import { AxiosInstance } from 'axios';

import Client from './client';
import User from './resources/user';
import { OpenApiOptions } from './types/options';
import { UserResource } from './types/resources';

export default class OpenApi {
  protected client: AxiosInstance;
  protected options: OpenApiOptions;
  protected user: UserResource;

  constructor({ domain, version = 'v2' }: OpenApiOptions) {
    this.client = Client({ domain, version });
    this.options = { domain, version };
    this.user = new User(this.client);
  }

  get users(): UserResource {
    return this.user;
  }
}
