export interface Resource {
  get(): Promise<any>;

  sortBy(sortable: string): this;
}

export interface UserResource extends Resource {
  assigned(assigned: boolean): this;

  at(location: number | string): this;

  performing(services: number | number[] | string | string[]): this;
}
