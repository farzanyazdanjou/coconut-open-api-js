export interface Filterable<T> {
  filters?: T;
  limit?: number;
  page?: number;
  sort?: string;
}

export interface LocationFilter {
  assigned?: boolean;
  services?: number | number[] | string | string[];
  user?: number | string;
}

export interface QuestionFilter {
  services?: number | number[] | string | string[];
}

export interface ServiceFilter {
  assigned?: boolean;
  category?: number | string;
  location?: number | string;
  user?: number | string;
}

export interface TimeSlotFilter {
  end?: string;
  location?: number;
  services?: number | number[];
  start?: string;
  user?: number;
}

export interface UserFilter {
  assigned?: boolean;
  services?: number | number[] | string | string[];
  location?: number | string;
}
