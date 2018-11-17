export interface AnswerModel {
  for(question: number): this;

  is(value: string): this;
}

export interface PreferenceModel {
  between(start: string, end: string): this;

  next(): this;

  on(day: number): this;
}
