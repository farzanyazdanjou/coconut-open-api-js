import { LocationDetailParameters, ReachableDetailParameters } from './parameters';

export interface AnswerModel {
  for(question: number): this;

  is(value: string): this;
}

export interface AttendeeModel {
  answers(answers: AnswerModel | AnswerModel[]): this;

  located(details: LocationDetailParameters): this;

  messagable(): this;

  named(first: string, last: string): this;

  provided(notes: string): this;

  reachable(details: ReachableDetailParameters): this;

  speaks(lang: string): this;
}

export interface PreferenceModel {
  between(start: string, end: string): this;

  next(): this;

  on(day: number): this;
}
