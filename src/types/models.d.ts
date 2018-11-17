export interface Answerable {
  for(question: number): this;

  is(value: string): this;
}

export interface Preferable {
  between(start: string, end: string): this;

  next(): this;

  on(day: number): this;
}
