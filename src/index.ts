import { AxiosInstance } from 'axios';

import Client from './client';
import Setting from './resources/setting';
import User from './resources/user';
import { Resource, UserResource } from './types/resources';

export default class OpenApi {
  protected client: AxiosInstance;
  protected domain: string;
  protected setting: Resource;
  protected user: UserResource;

  constructor(domain: string) {
    this.client = Client(domain);
    this.domain = domain;
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
