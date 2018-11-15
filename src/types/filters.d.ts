export interface Filterable<T> {
  filters?: T;
  limit?: number;
  page?: number;
  sort?: string;
}

export interface ServiceFilter {
  assigned?: boolean;
  category?: number | string;
  location?: number | string;
  user?: number | string;
}

export interface UserFilter {
  assigned?: boolean;
  services?: number | number[] | string | string[];
  location?: number | string;
}
