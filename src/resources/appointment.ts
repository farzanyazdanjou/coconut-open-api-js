import { AxiosInstance } from 'axios';

import { AnswerModel, AttendeeModel } from '../types/models';
import {
  AppointmentMatcherParameters,
  AppointmentNotificationParameters,
  AppointmentParameters
} from '../types/parameters';
import { AppointmentResource } from '../types/resources';

export default class Appointment implements AppointmentResource {
  protected attendees: AttendeeModel[] | [];
  protected client: AxiosInstance;
  protected location: number | null;
  protected matchers: AppointmentMatcherParameters | null;
  protected notifications: AppointmentNotificationParameters | null;
  protected services: number | number[] | null;
  protected start: string | null;
  protected user: number | null;

  constructor(client: AxiosInstance) {
    this.attendees = [];
    this.client = client;
    this.location = null;
    this.matchers = null;
    this.notifications = null;
    this.services = null;
    this.start = null;
    this.user = null;
  }

  public at(location: number): this {
    this.location = location;

    return this;
  }

  public async book(): Promise<any> {
    return await this.client.post('appointments', this.params());
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

  public starting(start: string): this {
    this.start = start;

    return this;
  }

  public with(attendees: AttendeeModel | AttendeeModel[]): this {
    this.attendees = Array.isArray(attendees) ? attendees : [attendees];

    return this;
  }

  protected params(): AppointmentParameters {
    const attendees = (this.attendees as AttendeeModel[])
      .map((attendee: AttendeeModel): object => {
        let parameters: object = {
          attributes: attendee.toResponse(),
          type: 'attendees',
        };

        const answers = attendee.getAnswers();

        if (answers.length > 0) {
          parameters = {
            ...parameters,
            relationships: {
              answers: {
                data: (answers as AnswerModel[]).map((answer: AnswerModel) => answer.toResponse())
              }
            }
          }
        }

        return parameters;
      });

    let params: AppointmentParameters = {
      data: {
        attributes: {
          location_id: this.location,
          service_id: this.services,
          staff_id: null,
          start: this.start,
        },
        relationships: {
          attendees: {
            data: attendees,
          },
        },
        type: 'appointments',
      },
    };

    if (this.user) {
      params.data.attributes.staff_id = this.user;
    }

    if (this.notifications) {
      params = {
        ...params,
        meta: {
          notify: this.notifications,
        },
      };
    }

    return params;
  }
}
