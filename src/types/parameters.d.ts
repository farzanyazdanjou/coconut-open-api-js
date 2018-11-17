export interface AnswerParameters {
  question: number | null;
  value: string | null;
}

export interface AttendeeParameters {
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  address?: string;
  city?: string;
  region?: string;
  country?: string;
  postcode?: string;
  timezone?: string;
  phone?: string;
  cell_phone?: string;
  work_phone?: string;
}

export interface LocationDetailParameters {
  address?: string;
  city?: string;
  region?: string;
  country?: string;
  postcode?: string;
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
  email: string;
  phone?: string;
  cell_phone?: string;
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
