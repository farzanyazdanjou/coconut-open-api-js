import { AxiosInstance } from 'axios';

import { WaitListFilter } from '../types/filters';
import { AttendeeModel, PreferenceModel } from '../types/models';
import { WaitListResource } from '../types/resources';

export default class WaitList implements WaitListResource {
  protected client: AxiosInstance;
  protected filters: WaitListFilter;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.filters = {}
  }

  public async add(): Promise<any> {
    //
  }

  public at(location: number | string): this {
    this.filters.location = location;

    return this;
  }

  public belonging(client: number): this {
    return this;
  }

  public async find(list: number | string): Promise<any> {
    //
  }

  public for(attendee: AttendeeModel): this {
    return this;
  }

  public include(includes: string): this {
    return this;
  }

  public prefers(preferences: PreferenceModel | PreferenceModel[]): this {
    return this;
  }

  public async remove(list: number | string): Promise<any> {
    //
  }

  public seeking(service: number | string): this {
    this.filters.service = service;

    return this;
  }

  public async update(list: number | string): Promise<any> {
    //
  }

  public with(user: number | string): this {
    this.filters.user = user;

    return this;
  }
}
