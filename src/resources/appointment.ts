import { AxiosInstance } from 'axios';

import { AttendeeModel } from '../types/models';
import { AppointmentMatcherParameters, AppointmentNotificationParameters } from '../types/parameters';
import { AppointmentResource } from '../types/resources';

export default class Appointment implements AppointmentResource {
  protected attendees: AttendeeModel[] | null;
  protected client: AxiosInstance;
  protected location: number | null;
  protected matchers: AppointmentMatcherParameters | null;
  protected notifications: AppointmentNotificationParameters | null;
  protected services: number | number[] | null;
  protected user: number | null;

  constructor(client: AxiosInstance) {
    this.attendees = null;
    this.client = client;
    this.location = null;
    this.matchers = null;
    this.notifications = null;
    this.services = null;
    this.user = null;
  }

  public at(location: number): this {
    this.location = location;

    return this;
  }

  public async book(): Promise<any> {
    //
  }

  public by(user: number): this {
    this.user = user;

    return this;
  }

  public async cancel(appointment: number, attendee: number): Promise<any> {
    return await this.client.delete(`appointments/${appointment}/${attendee}`);
  }

  public for(services: number | number[]): this {
    this.services = services;

    return this;
  }

  public async get(): Promise<any> {
    return await this.client.get('appointments', {
      params: this.matchers,
    });
  }

  public matching(matchers: AppointmentMatcherParameters): this {
    this.matchers = matchers;

    return this;
  }

  public notify(notifications: AppointmentNotificationParameters): this {
    this.notifications = notifications;

    return this;
  }

  public with(attendees: AttendeeModel | AttendeeModel[]): this {
    this.attendees = Array.isArray(attendees) ? attendees : [attendees];

    return this;
  }
}
