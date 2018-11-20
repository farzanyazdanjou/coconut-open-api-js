import { ModelInterface } from '../index';
import Model from './model';

export interface AnswerModel extends ModelInterface {
  for(question: number): this;

  is(value: string): this;

  transform(): object;
}

export interface AnswerParameters {
  question: number | null;
  value: string | null;
}

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

  public transform(): object {
    return {
      attributes: {
        question_id: this.attributes.question,
        value: this.attributes.value,
      },
      type: 'answers',
    };
  }
}
