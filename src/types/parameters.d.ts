import { AnswerModel } from './models';

export interface AppointmentMatcherParameters {
  code: string;
  email: string;
  id: string | number;
}

export interface AppointmentNotificationParameters {
  client?: boolean;
  user?: boolean;
}

export interface AnswerParameters {
  question: number | null;
  value: string | null;
}

export interface AttendeeParameters {
  address?: string;
  answers?: AnswerModel | AnswerModel[];
  cell_phone?: string;
  city?: string;
  country?: string;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  language?: string;
  messagable?: boolean;
  notes?: string;
  phone?: string;
  postcode?: string;
  region?: string;
  timezone?: string;
  work_phone?: string;
}

export interface LocationDetailParameters {
  address?: string;
  city?: string;
  country?: string;
  postcode?: string;
  region?: string;
  timezone?: string;
}

export interface LocationParameters {
  assigned?: boolean;
  service?: number | number[] | string | string[];
  user?: number | string;
}

export interface PreferenceParameters {
  day?: number | null;
  end?: string | null;
  start?: string | null;
  type?: number | null;
}

export interface QuestionParameters {
  service?: number | number[] | string | string[];
}

export interface ReachableDetailParameters {
  cell_phone?: string;
  email: string;
  phone?: string;
  work_phone?: string;
}

export interface ServiceParameters {
  assigned?: boolean;
  category?: number | string;
  location?: number | string;
  user?: number | string;
}

export interface TimeSlotParameters {
  end?: string;
  location_id?: number;
  service_id?: number | number[];
  staff_id?: number;
  start?: string;
}

export interface UserParameters {
  assigned?: boolean;
  service?: number | number[] | string | string[];
  location?: number | string;
}
