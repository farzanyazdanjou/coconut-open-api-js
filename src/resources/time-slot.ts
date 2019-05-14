import { AxiosInstance } from 'axios';

import { Resource } from '../index';
import Conditional from './conditional';

export interface TimeSlotFilter {
  end?: string;
  location?: number;
  services?: number | number[];
  start?: string;
  user?: number;
}

export interface TimeSlotParameters {
  end?: string;
  location_id?: number;
  service_id?: number | number[];
  staff_id?: number;
  start?: string;
}

export interface TimeSlotResource extends Resource {
  at(location: number): this;

  between(start: string, end: string): this;

  by(user: number): this;

  for(services: number | number[]): this;
}

export default class TimeSlot extends Conditional implements TimeSlotResource {
  protected client: AxiosInstance;
  protected filters: TimeSlotFilter;

  constructor(client: AxiosInstance) {
    super();

    this.client = client;
    this.filters = {};
  }

  public at(location: number): this {
    this.filters.location = location;

    return this;
  }

  public between(start: string, end: string): this {
    this.filters.start = start;
    this.filters.end = end;

    return this;
  }

  public by(user: number): this {
    this.filters.user = user;

    return this;
  }

  public for(services: number | number[]): this {
    this.filters.services = services;

    return this;
  }

  public async get(): Promise<any> {
    const params: TimeSlotParameters = {
      end: this.filters.end,
      location_id: this.filters.location,
      service_id: this.filters.services,
      start: this.filters.start,
    };

    if (this.filters.user) {
      params.staff_id = this.filters.user;
    }

    return await this.client.get('times', { params });
  }
}
