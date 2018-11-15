export interface Resource {
  get(): Promise<any>;

  on(page: number): this;

  sortBy(sortable: string): this;

  take(limit: number): this;
}

export interface UserResource extends Resource {
  assigned(assigned: boolean): this;

  at(location: number | string): this;

  performing(services: number | number[] | string | string[]): this;
}
