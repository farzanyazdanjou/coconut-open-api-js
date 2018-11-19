import { PreferenceModel } from '../types/models';
import { PreferenceParameters } from '../types/parameters';
import Model from './model';

const NEXT_AVAILABLE = 1;
const CERTAIN_DAYS = 2;

export default class Preference extends Model implements PreferenceModel {
  public static now() {
    const today = new Date;
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

    return `${date} ${time}`;
  }

  protected attributes: PreferenceParameters;

  constructor() {
    super();

    this.attributes = {
      day: null,
      end: null,
      start: null,
      type: null,
    }
  }

  public between(start: string, end: string): this {
    this.attributes.end = end;
    this.attributes.start = start;

    return this;
  }

  public next(): this {
    this.attributes.type = NEXT_AVAILABLE;

    return this;
  }

  public on(day: number): this {
    this.attributes.day = day;
    this.attributes.type = CERTAIN_DAYS;

    return this;
  }

  public transform(): object {
    const attributes: PreferenceParameters = this.attributes;

    Object.keys(attributes).forEach(key => {
      const value = (attributes as any)[key];

      if (value === undefined || value === null) {
        delete (attributes as any)[key];
      }
    });

    if (attributes.type === Preference.NEXT_AVAILABLE) {
      attributes.start = Preference.now();
    }

    return {
      attributes: this.attributes,
      type: 'request-preferences',
    };
  }

  static get NEXT_AVAILABLE() {
    return NEXT_AVAILABLE;
  }

  static get CERTAIN_DAYS() {
    return CERTAIN_DAYS;
  }
}
