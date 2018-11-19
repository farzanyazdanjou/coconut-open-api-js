import { AttendeeModel } from './models';

export interface AppointmentRelationship {
  attendees?: AttendeeModel[] | []
}

export interface WaitListRelationship {
  attendee?: AttendeeModel;
  location?: number | string;
  service?: number | string;
  user?: number | string;
}
