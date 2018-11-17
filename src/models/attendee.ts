import { AnswerModel, AttendeeModel } from '../types/models';
import { AttendeeParameters, LocationDetailParameters, ReachableDetailParameters } from '../types/parameters';

export default class Attendee implements AttendeeModel {
  protected attributes: AttendeeParameters;

  constructor() {
    this.attributes = {
      email: null,
      first_name: null,
      last_name: null,
    };
  }

  public answers(answers: AnswerModel | AnswerModel[]): this {
    return this;
  }

  public located(details: LocationDetailParameters): this {
    return this;
  }

  public messagable(): this {
    return this;
  }

  public named(first: string, last: string): this {
    return this;
  }

  public provided(notes: string): this {
    return this;
  }

  public reachable(details: ReachableDetailParameters): this {
    return this;
  }

  public speaks(lang: string): this {
    return this;
  }
}
