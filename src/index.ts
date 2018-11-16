import { AxiosInstance } from 'axios';

import Client from './client';
import Service from './resources/service';
import Setting from './resources/setting';
import User from './resources/user';
import { Resource, ServiceResource, UserResource } from './types/resources';

export default class OpenApi {
  protected client: AxiosInstance;
  protected domain: string;
  protected service: ServiceResource;
  protected setting: Resource;
  protected user: UserResource;

  constructor(domain: string) {
    this.client = Client(domain);
    this.domain = domain;
    this.service = new Service(this.client);
    this.setting = new Setting(this.client);
    this.user = new User(this.client);
  }

  get services(): ServiceResource {
    return this.service;
  }

  get settings(): Resource {
    return this.setting;
  }

  get users(): UserResource {
    return this.user;
  }
}
