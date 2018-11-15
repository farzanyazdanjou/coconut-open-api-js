import { AxiosInstance } from 'axios';

import Client from './client';
import User from './resources/user';
import { UserResource } from './types/resources';

export default class OpenApi {
  protected client: AxiosInstance;
  protected domain: string;
  protected user: UserResource;

  constructor(domain: string) {
    this.client = Client(domain);
    this.domain = domain;
    this.user = new User(this.client);
  }

  get users(): UserResource {
    return this.user;
  }
}
