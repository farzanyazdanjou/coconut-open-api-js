import { AppointmentResource } from '../types/resources';
import { AttendeeModel } from '../types/models';
import { AppointmentMatcherParameters } from '../types/parameters';

export default class Appointment implements AppointmentResource {
  public at(location: number): this {
    return this;
  }

  public async book(): Promise<any> {
    //
  }

  public by(user: number): this {
    return this;
  }

  public async cancel(appointment: number, attendee: number): Promise<any> {
    return this;
  }

  public for(services: number | number[]): this {
    return this;
  }

  public async get(): Promise<any> {
    //
  }

  public matching(matchers: AppointmentMatcherParameters): this {
    return this;
  }

  public notify(notifications: object): this {
    return this;
  }

  public with(attendees: AttendeeModel | AttendeeModel[]): this {
    return this;
  }
}
