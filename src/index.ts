import { AxiosInstance } from 'axios';

import Client from './client';
import Setting from './resources/setting';
import User from './resources/user';
import { OpenApiOptions } from './types/options';
import { Resource, UserResource } from './types/resources';

export default class OpenApi {
  protected client: AxiosInstance;
  protected options: OpenApiOptions;
  protected setting: Resource;
  protected user: UserResource;

  constructor({ domain, version = 'v2' }: OpenApiOptions) {
    this.client = Client({ domain, version });
    this.options = { domain, version };
    this.setting = new Setting(this.client);
    this.user = new User(this.client);
  }

  get settings(): Resource {
    return this.setting;
  }

  get users(): UserResource {
    return this.user;
  }
}
