import { AxiosInstance } from 'axios';

import { Resource } from '../index';
import { AttendeeModel } from '../models/attendee';
import Conditional, { ConditionalResource } from './conditional';

export interface AppointmentFilter {
  invitation?: number;
  location?: number;
  matchers?: AppointmentMatcherParameters;
  notifications?: AppointmentNotificationParameters;
  services?: number | number[];
  start?: string;
  user?: number;
}

export interface Utm {
  source?: string;
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
    attributes?: {
      invitation_id: number | null;
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
    utm?: {
      source?: string;
    };
  };
}

export interface RescheduleParameters {
  data: {
    attributes: {
      start: string | undefined;
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

export interface AppointmentResource extends Resource, ConditionalResource {
  at(location: number): this;

  book(): Promise<any>;

  by(user: number): this;

  cancel(appointment: number, attendee: number): Promise<any>;

  for(services: number | number[]): this;

  matching(matchers: AppointmentMatcherParameters): this;

  notify(notifications: AppointmentNotificationParameters): this;

  reschedule(appointment: number): Promise<any>;

  starting(start: string): this;

  source(source: string): this;

  via(invitation: number): this;

  with(attendees: AttendeeModel | AttendeeModel[]): this;
}

export interface AppointmentRelationship {
  attendees: AttendeeModel[] | [];
}

export default class Appointment extends Conditional implements AppointmentResource {
  protected client: AxiosInstance;
  protected filters: AppointmentFilter;
  protected relationships: AppointmentRelationship;
  protected utm: Utm;

  constructor(client: AxiosInstance) {
    super();

    this.client = client;
    this.filters = {};
    this.relationships = {
      attendees: [],
    };
    this.utm = {};
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
    return await this.client.delete(`appointments/${appointment}/${attendee}`, this.params());
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

  public async reschedule(appointment: number): Promise<any> {
    return await this.client.patch(`appointments/${appointment}`, this.rescheduleParams());
  }

  public starting(start: string): this {
    this.filters.start = start;

    return this;
  }

  public source(source: string): this {
    this.utm.source = source;

    return this;
  }

  public via(invitation: number): this {
    this.filters.invitation = invitation;

    return this;
  }

  public with(attendees: AttendeeModel | AttendeeModel[]): this {
    this.relationships.attendees = Array.isArray(attendees) ? attendees : [attendees];

    return this;
  }

  protected params(): AppointmentParameters | object {
    if (this.relationships.attendees.length === 0) {
      return {};
    }

    const attendees = (this.relationships.attendees as AttendeeModel[]).map(
      (attendee: AttendeeModel): object => {
        return attendee.transform();
      },
    );

    let params: AppointmentParameters = {
      data: {
        relationships: {
          attendees: {
            data: attendees,
          },
        },
        type: 'appointments',
      },
    };

    if (this.filters.location || this.filters.services || this.filters.start) {
      params.data.attributes = {
        invitation_id: null,
        location_id: this.filters.location,
        service_id: this.filters.services,
        staff_id: null,
        start: this.filters.start,
      };

      if (this.filters.user) {
        params.data.attributes.staff_id = this.filters.user;
      }

      if (this.filters.invitation) {
        params.data.attributes.invitation_id = this.filters.invitation;
      }
    }

    if (this.filters.notifications) {
      params = {
        ...params,
        meta: {
          notify: this.filters.notifications,
        },
      };
    }

    if (this.hasUtm()) {
      params = {
        ...params,
        meta: {
          ...params.meta,
          utm: {
            ...this.utm.source && {source: this.utm.source},
          },
        },
      };
    }

    return params;
  }

  protected hasUtm(): boolean {
    return !!(this.utm.source)
  }

  protected rescheduleParams(): RescheduleParameters | object {
    let params: RescheduleParameters = {
      data: {
        attributes: {
          start: this.filters.start,
        },
        type: 'appointments',
      },
    };

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
