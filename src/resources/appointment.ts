import { AxiosInstance } from 'axios';

import { Resource } from '../index';
import { AttendeeModel } from '../models/attendee';
import Conditional from './conditional';

export interface AppointmentFilter {
  location?: number;
  matchers?: AppointmentMatcherParameters;
  notifications?: AppointmentNotificationParameters;
  services?: number | number[];
  start?: string;
  user?: number;
}

export interface AppointmentMatcherParameters {
  code: string;
  email: string;
  id: string | number;
}

export interface AppointmentNotificationParameters {
  client?: boolean;
  user?: boolean;
}

export interface AppointmentParameters {
  data: {
    attributes: {
      location_id: number | undefined;
      service_id: number | number[] | undefined;
      staff_id: number | null;
      start: string | undefined;
    };
    relationships: {
      attendees: {
        data: object[];
      };
    };
    type: string;
  };
  meta?: {
    notify?: {
      client?: boolean;
      user?: boolean;
    };
  };
}

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

export interface AppointmentRelationship {
  attendees?: AttendeeModel[] | [];
}

export default class Appointment extends Conditional implements AppointmentResource {
  protected client: AxiosInstance;
  protected filters: AppointmentFilter;
  protected relationships: AppointmentRelationship;

  constructor(client: AxiosInstance) {
    super();

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
    const attendees = (this.relationships.attendees as AttendeeModel[]).map(
      (attendee: AttendeeModel): object => {
        return attendee.transform();
      },
    );

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
