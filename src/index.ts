import { AxiosInstance } from 'axios';

import Client from './client';
import Location from './resources/location';
import Question from './resources/question';
import Service from './resources/service';
import Setting from './resources/setting';
import User from './resources/user';
import { LocationResource, QuestionResource, Resource, ServiceResource, UserResource } from './types/resources';

export default class OpenApi {
  protected client: AxiosInstance;
  protected domain: string;
  protected location: LocationResource;
  protected question: QuestionResource;
  protected service: ServiceResource;
  protected setting: Resource;
  protected user: UserResource;

  constructor(domain: string) {
    this.client = Client(domain);
    this.domain = domain;
    this.location = new Location(this.client);
    this.question = new Question(this.client);
    this.service = new Service(this.client);
    this.setting = new Setting(this.client);
    this.user = new User(this.client);
  }

  get locations(): LocationResource {
    return this.location;
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
