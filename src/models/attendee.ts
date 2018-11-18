import { AnswerModel, AttendeeModel } from '../types/models';
import { AttendeeParameters, LocationDetailParameters, ReachableDetailParameters } from '../types/parameters';
import Model from './model';

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

  public located(details: LocationDetailParameters): this {
    this.attributes = {...this.attributes, ...details};

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
    this.attributes = {...this.attributes, ...details};

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
            data: (answers as AnswerModel[])
              .map((answer: AnswerModel) => answer.transform())
          }
        }
      }
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
