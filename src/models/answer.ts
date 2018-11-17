import { Answerable } from '../types/models';
import { AnswerableParameters } from '../types/parameters';

export default class Answer implements Answerable {
  protected attributes: AnswerableParameters;

  constructor() {
    this.attributes = {
      question: null,
      value: null,
    };
  }

  public for(question: number): this {
    this.attributes.question = question;

    return this;
  }

  public is(value: string): this {
    this.attributes.value = value;

    return this;
  }
}
