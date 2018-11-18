import { LocationDetailParameters, ReachableDetailParameters } from './parameters';

interface Model {
  getAttributes(): object;
}

export interface AnswerModel extends Model {
  for(question: number): this;

  is(value: string): this;

  transform(): object;
}

export interface AttendeeModel extends Model {
  answers(answers: AnswerModel | AnswerModel[]): this;

  located(details: LocationDetailParameters): this;

  messagable(): this;

  named(first: string, last: string): this;

  provided(notes: string): this;

  reachable(details: ReachableDetailParameters): this;

  speaks(language: string): this;

  transform(): object;
}

export interface PreferenceModel extends Model {
  between(start: string, end: string): this;

  next(): this;

  on(day: number): this;
}
