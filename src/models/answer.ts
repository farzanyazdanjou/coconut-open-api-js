export default class Answer {
  protected question: number | null;
  protected value: string | null;

  constructor() {
    this.question = null;
    this.value = null;
  }

  public for(question: number): this {
    this.question = question;

    return this;
  }

  public is(value: string): this {
    this.value = value;

    return this;
  }
}
