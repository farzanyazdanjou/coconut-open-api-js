export interface ConditionalResource {
  when(condition: boolean, callback: (resource: this) => void): this;
}

export default class Conditional implements ConditionalResource {
  public when(condition: boolean, callback: (resource: this) => void): this {
    if (condition) {
      callback(this);
    }

    return this;
  }
}
