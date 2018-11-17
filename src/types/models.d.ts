export interface Answerable {
  for(question: number): this;

  is(value: string): this;
}
