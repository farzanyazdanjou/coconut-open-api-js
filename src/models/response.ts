import { ModelInterface } from '../index';
import Model from './model';

export interface ResponseModel extends ModelInterface {
  for(question: number): this;

  is(value: string): this;

  selected(option: number): this;

  transform(): object;
}

export interface ResponseParameters {
  option: number | null;
  question: number | null;
  value: string | null;
}

export default class Response extends Model implements ResponseModel {
  protected attributes: ResponseParameters;

  constructor() {
    super();

    this.attributes = {
      option: null,
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

  public selected(option: number): this {
    this.attributes.option = option;

    return this;
  }

  public transform(): object {
    return {
      attributes: {
        form_option_id: this.attributes.option,
        form_question_id: this.attributes.question,
        value: this.attributes.value,
      },
      type: 'responses',
    };
  }
}
