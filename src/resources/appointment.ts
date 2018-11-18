import { AxiosInstance } from 'axios';

import { AppointmentFilter } from '../types/filters';
import { AnswerModel, AttendeeModel } from '../types/models';
import {
  AppointmentMatcherParameters,
  AppointmentNotificationParameters,
  AppointmentParameters
} from '../types/parameters';
import { AppointmentRelationship } from '../types/relationships';
import { AppointmentResource } from '../types/resources';

export default class Appointment implements AppointmentResource {
  protected client: AxiosInstance;
  protected filters: AppointmentFilter;
  protected relationships: AppointmentRelationship;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.filters = {};
    this.relationships = {};
  }

  public at(location: number): this {
    this.filters.location = location;

    return this;
  }

  public async book(): Promise<any> {
    return await this.client.post('appointments', this.params());
  }

  public by(user: number): this {
    this.filters.user = user;

    return this;
  }

  public async cancel(appointment: number, attendee: number): Promise<any> {
    return await this.client.delete(`appointments/${appointment}/${attendee}`);
  }

  public for(services: number | number[]): this {
    this.filters.services = services;

    return this;
  }

  public async get(): Promise<any> {
    return await this.client.get('appointments', {
      params: this.filters.matchers,
    });
  }

  public matching(matchers: AppointmentMatcherParameters): this {
    this.filters.matchers = matchers;

    return this;
  }

  public notify(notifications: AppointmentNotificationParameters): this {
    this.filters.notifications = notifications;

    return this;
  }

  public starting(start: string): this {
    this.filters.start = start;

    return this;
  }

  public with(attendees: AttendeeModel | AttendeeModel[]): this {
    this.relationships.attendees = Array.isArray(attendees) ? attendees : [attendees];

    return this;
  }

  protected params(): AppointmentParameters {
    const attendees = (this.relationships.attendees as AttendeeModel[])
      .map((attendee: AttendeeModel): object => {
        const answers = attendee.getAnswers();
        let parameters: object = attendee.toResponse();

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
          location_id: this.filters.location,
          service_id: this.filters.services,
          staff_id: null,
          start: this.filters.start,
        },
        relationships: {
          attendees: {
            data: attendees,
          },
        },
        type: 'appointments',
      },
    };

    if (this.filters.user) {
      params.data.attributes.staff_id = this.filters.user;
    }

    if (this.filters.notifications) {
      params = {
        ...params,
        meta: {
          notify: this.filters.notifications,
        },
      };
    }

    return params;
  }
}
