import { AxiosInstance } from 'axios';

import Client from './client';
import Question from './resources/question';
import Service from './resources/service';
import Setting from './resources/setting';
import User from './resources/user';
import { QuestionResource, Resource, ServiceResource, UserResource } from './types/resources';

export default class OpenApi {
  protected client: AxiosInstance;
  protected domain: string;
  protected question: QuestionResource;
  protected service: ServiceResource;
  protected setting: Resource;
  protected user: UserResource;

  constructor(domain: string) {
    this.client = Client(domain);
    this.domain = domain;
    this.question = new Question(this.client);
    this.service = new Service(this.client);
    this.setting = new Setting(this.client);
    this.user = new User(this.client);
  }

  get questions(): QuestionResource {
    return this.question;
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
