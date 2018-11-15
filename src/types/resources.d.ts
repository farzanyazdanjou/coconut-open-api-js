export interface Resource {
  get(): Promise<any>;

  sortBy(sortable: string): this;
}

export interface Pageable extends Resource {
  on(page: number): this;

  take(limit: number): this;
}

export interface UserResource extends Pageable {
  assigned(assigned: boolean): this;

  at(location: number | string): this;

  performing(services: number | number[] | string | string[]): this;
}
