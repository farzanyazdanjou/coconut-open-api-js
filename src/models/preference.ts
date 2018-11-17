import { Preferable } from '../types/models';
import { PreferableParameters } from '../types/parameters';

const NEXT_AVAILABLE = 1;
const CERTAIN_DAYS = 2;

export default class Preference implements Preferable {
  protected attributes: PreferableParameters;

  constructor() {
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

  static get NEXT_AVAILABLE() {
    return NEXT_AVAILABLE;
  }

  static get CERTAIN_DAYS() {
    return CERTAIN_DAYS;
  }
}
