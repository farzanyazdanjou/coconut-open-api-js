import { AttendeeModel, PreferenceModel } from './models';
import { AppointmentMatcherParameters, AppointmentNotificationParameters } from './parameters';

export interface AppointmentResource extends Resource {
  at(location: number): this;

  book(): Promise<any>;

  by(user: number): this;

  cancel(appointment: number, attendee: number): Promise<any>;

  for(services: number | number[]): this;

  matching(matchers: AppointmentMatcherParameters): this;

  notify(notifications: AppointmentNotificationParameters): this;

  starting(start: string): this;

  with(attendees: AttendeeModel | AttendeeModel[]): this;
}

export interface LocationResource extends Pageable {
  assigned(assigned: boolean): this;

  containing(user: number | string): this;

  providing(services: number | number[] | string | string[]): this;
}

export interface Pageable extends Sortable {
  on(page: number): this;

  take(limit: number): this;
}

export interface QuestionResource extends Pageable {
  for(services: number | number[] | string | string[]): this;
}

export interface Resource {
  get(): Promise<any>;
}

export interface ServiceResource extends Pageable {
  assigned(assigned: boolean): this;

  at(location: number | string): this;

  by(user: number | string): this;

  in(category: number | string): this;
}

export interface Sortable extends Resource {
  sortBy(sortable: string): this;
}

export interface TimeSlotResource extends Resource {
  at(location: number): this;

  between(start: string, end: string): this;

  by(user: number): this;

  for(services: number | number[]): this;
}

export interface UserResource extends Pageable {
  assigned(assigned: boolean): this;

  at(location: number | string): this;

  performing(services: number | number[] | string | string[]): this;
}

export interface WaitListResource {
  add(): Promise<any>;

  at(location: number | string): this;

  belonging(client: number): this;

  find(list: number | string): Promise<any>;

  for(attendee: AttendeeModel): this;

  include(includes: string): this;

  prefers(preferences: PreferenceModel | PreferenceModel[]): this;

  remove(list: number | string): Promise<any>;

  seeking(service: number | string): this;

  update(list: number | string): Promise<any>;

  with(user: number | string): this;
}
