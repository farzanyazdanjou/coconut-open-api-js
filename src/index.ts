import { AxiosInstance } from 'axios';

import Client from './client';
import Days from './constants/days';
import Notifications from './constants/notifications';
import Answer from './models/answer';
import Attendee from './models/attendee';
import Preference from './models/preference';
import Appointment, { AppointmentResource } from './resources/appointment';
import Location, { LocationResource } from './resources/location';
import Question, { QuestionResource } from './resources/question';
import Service, { ServiceResource } from './resources/service';
import Setting from './resources/setting';
import TimeSlot, { TimeSlotResource } from './resources/time-slot';
import Timezone from './resources/timezone';
import User, { UserResource } from './resources/user';
import WaitList, { WaitListResource } from './resources/wait-list';

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

export { Answer, Attendee, Days, Notifications, Preference };

export class OpenApi {
  protected appointment: AppointmentResource;
  protected client: AxiosInstance;
  protected domain?: string;
  protected list: WaitListResource;
  protected location: LocationResource;
  protected question: QuestionResource;
  protected service: ServiceResource;
  protected setting: Resource;
  protected slot: TimeSlotResource;
  protected timezone: Resource;
  protected user: UserResource;

  constructor(domain?: string) {
    this.client = Client(domain);
    this.domain = domain;
    this.appointment = new Appointment(this.client);
    this.list = new WaitList(this.client);
    this.location = new Location(this.client);
    this.question = new Question(this.client);
    this.service = new Service(this.client);
    this.setting = new Setting(this.client);
    this.slot = new TimeSlot(this.client);
    this.timezone = new Timezone(this.client);
    this.user = new User(this.client);
  }

  public appointments(): AppointmentResource {
    return this.appointment;
  }

  public lists(): WaitListResource {
    return this.list;
  }

  public locations(): LocationResource {
    return this.location;
  }

  public questions(): QuestionResource {
    return this.question;
  }

  public services(): ServiceResource {
    return this.service;
  }

  public settings(): Resource {
    return this.setting;
  }

  public slots(): TimeSlotResource {
    return this.slot;
  }

  public timezones(): Resource {
    return this.timezone;
  }

  public users(): UserResource {
    return this.user;
  }
}
