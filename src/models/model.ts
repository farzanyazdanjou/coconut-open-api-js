export default class Model {
  protected attributes: object;

  constructor() {
    this.attributes = {};
  }

  public getAttributes() {
    return this.attributes;
  }
}
