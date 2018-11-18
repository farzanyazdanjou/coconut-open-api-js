import { AttendeeModel } from './models';

export interface AppointmentRelationship {
  attendees?: AttendeeModel[] | []
}
