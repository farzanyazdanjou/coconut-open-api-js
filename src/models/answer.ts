import { AnswerModel } from '../types/models';
import { AnswerParameters } from '../types/parameters';

export default class Answer implements AnswerModel {
  protected attributes: AnswerParameters;

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
