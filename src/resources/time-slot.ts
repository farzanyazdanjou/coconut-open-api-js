import { AxiosInstance } from 'axios';

import { TimeSlotFilter } from '../types/filters';
import { TimeSlotResource } from '../types/resources';
import { TimeSlotParameters } from '../types/parameters';

export default class TimeSlot implements TimeSlotResource {
  protected client: AxiosInstance;
  protected filters: TimeSlotFilter;

  constructor(client: AxiosInstance) {
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
};
