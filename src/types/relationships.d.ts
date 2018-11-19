import { AttendeeModel, PreferenceModel } from './models';

export interface AppointmentRelationship {
  attendees?: AttendeeModel[] | []
}

export interface WaitListRelationship {
  attendee?: AttendeeModel;
  location?: number | string;
  preferences?: PreferenceModel | PreferenceModel[];
  service?: number | string;
  user?: number | string;
}
