import { AnswerModel } from '../types/models';
import { AnswerParameters } from '../types/parameters';
import Model from './model';

export default class Answer extends Model implements AnswerModel {
  protected attributes: AnswerParameters;

  constructor() {
    super();

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

  public toResponse(): object {
    return {
      attributes: {
        question_id: this.attributes.question,
        value: this.attributes.value,
      },
      type: 'answers',
    };
  }
}
