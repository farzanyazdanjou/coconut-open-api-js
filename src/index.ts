import { AxiosInstance } from 'axios';

import Client from './client';
import Location, { LocationResource } from './resources/location';
import Question, { QuestionResource } from './resources/question';
import Service, { ServiceResource } from './resources/service';
import Setting from './resources/setting';
import TimeSlot, { TimeSlotResource } from './resources/time-slot';
import User, { UserResource } from './resources/user';

export interface Filterable<T> {
  filter?: T;
  limit?: number;
  page?: number;
  sort?: string;
}

export interface IncludableParameters {
  include?: string;
}

export interface ModelInterface {
  getAttributes(): object;
}

export interface Pageable extends Sortable {
  on(page: number): this;

  take(limit: number): this;
}

export interface Resource {
  get(): Promise<any>;
}

export interface Sortable extends Resource {
  sortBy(sortable: string): this;
}

export default class OpenApi {
  protected client: AxiosInstance;
  protected domain: string;
  protected location: LocationResource;
  protected question: QuestionResource;
  protected service: ServiceResource;
  protected setting: Resource;
  protected slot: TimeSlotResource;
  protected user: UserResource;

  constructor(domain: string) {
    this.client = Client(domain);
    this.domain = domain;
    this.location = new Location(this.client);
    this.question = new Question(this.client);
    this.service = new Service(this.client);
    this.setting = new Setting(this.client);
    this.slot = new TimeSlot(this.client);
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

  get slots(): TimeSlotResource {
    return this.slot;
  }

  get users(): UserResource {
    return this.user;
  }
}
