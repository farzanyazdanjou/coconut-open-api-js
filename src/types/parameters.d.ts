export interface AnswerableParameters {
  question: number | null;
  value: string | null;
}

export interface LocationParameters {
  assigned?: boolean;
  service?: number | number[] | string | string[];
  user?: number | string;
}

export interface PreferableParameters {
  day?: number | null;
  end?: string | null;
  start?: string | null;
  type?: number | null;
}

export interface QuestionParameters {
  service?: number | number[] | string | string[];
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
