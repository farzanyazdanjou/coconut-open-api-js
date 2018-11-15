export interface Pageable extends Sortable {
  on(page: number): this;

  take(limit: number): this;
}

export interface Resource {
  get(): Promise<any>;
}

export interface Sortable extends Resource {
  sortBy(sortable: string): this;
}

export interface UserResource extends Pageable {
  assigned(assigned: boolean): this;

  at(location: number | string): this;

  performing(services: number | number[] | string | string[]): this;
}
