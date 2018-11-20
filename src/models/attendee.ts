import { ModelInterface } from '../index';
import { AnswerModel } from './answer';
import Model from './model';

export interface AttendeeModel extends ModelInterface {
  answers(answers: AnswerModel | AnswerModel[]): this;

  located(details: LocatableDetailParameters): this;

  messagable(): this;

  named(first: string, last: string): this;

  provided(notes: string): this;

  reachable(details: ReachableDetailParameters): this;

  speaks(language: string): this;

  transform(): object;
}

export interface AttendeeParameters {
  address?: string;
  answers?: AnswerModel[] | [];
  cell_phone?: string;
  city?: string;
  country?: string;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  language?: string;
  messagable?: boolean;
  notes?: string;
  phone?: string;
  postcode?: string;
  region?: string;
  timezone?: string;
  work_phone?: string;
}

export interface LocatableDetailParameters {
  address?: string;
  city?: string;
  country?: string;
  postcode?: string;
  region?: string;
  timezone?: string;
}

export interface ReachableDetailParameters {
  cell_phone?: string;
  email: string;
  phone?: string;
  work_phone?: string;
}

export default class Attendee extends Model implements AttendeeModel {
  protected attributes: AttendeeParameters;

  constructor() {
    super();

    this.attributes = {
      email: null,
      first_name: null,
      last_name: null,
    };
  }

  public answers(answers: AnswerModel | AnswerModel[]): this {
    this.attributes.answers = Array.isArray(answers) ? answers : [answers];

    return this;
  }

  public located(details: LocatableDetailParameters): this {
    this.attributes = { ...this.attributes, ...details };

    return this;
  }

  public messagable(): this {
    this.attributes.messagable = true;

    return this;
  }

  public named(first: string, last: string): this {
    this.attributes.first_name = first;
    this.attributes.last_name = last;

    return this;
  }

  public provided(notes: string): this {
    this.attributes.notes = notes;

    return this;
  }

  public reachable(details: ReachableDetailParameters): this {
    this.attributes = { ...this.attributes, ...details };

    return this;
  }

  public speaks(language: string): this {
    this.attributes.language = language;

    return this;
  }

  public transform(): object {
    let parameters: object = this.parameters();
    const answers = this.attributes.answers || [];

    if (answers.length > 0) {
      parameters = {
        ...parameters,
        relationships: {
          answers: {
            data: (answers as AnswerModel[]).map((answer: AnswerModel) => answer.transform()),
          },
        },
      };
    }

    return parameters;
  }

  protected parameters(): object {
    const attributes: object = {
      address: this.attributes.address,
      cell_phone: this.attributes.cell_phone,
      city: this.attributes.city,
      country: this.attributes.country,
      email: this.attributes.email,
      first_name: this.attributes.first_name,
      lang: this.attributes.language,
      last_name: this.attributes.last_name,
      phone: this.attributes.phone,
      prov_state: this.attributes.region,
      receive_sms: this.attributes.messagable,
      timezone: this.attributes.timezone,
      work_phone: this.attributes.work_phone,
      zip_postal: this.attributes.postcode,
    };

    Object.keys(attributes).forEach(key => {
      const value = (attributes as any)[key];

      if (value === undefined || value === null) {
        delete (attributes as any)[key];
      }
    });

    return {
      attributes,
      type: 'attendees',
    };
  }
}
