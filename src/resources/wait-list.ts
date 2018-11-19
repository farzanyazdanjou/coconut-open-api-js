import { AttendeeModel, PreferenceModel } from '../types/models';
import { WaitListResource } from '../types/resources';

export default class WaitList implements WaitListResource {
  public async add(): Promise<any> {
    //
  }

  public at(location: number | string): this {
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
    return this;
  }

  public async update(list: number | string): Promise<any> {
    //
  }

  public with(user: number | string): this {
    return this;
  }
}
