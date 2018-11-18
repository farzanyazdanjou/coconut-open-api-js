export default class Notifications {
  static get CLIENT() {
    return {
      client: true,
    };
  }

  static get USER() {
    return {
      user: true,
    };
  }

  static get ALL() {
    return {
      client: true,
      user: true,
    };
  }
}
