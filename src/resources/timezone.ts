import { AxiosInstance } from 'axios';

export interface TimezoneResource {
  get(country?: string): Promise<any>;
}

export default class Timezone implements TimezoneResource {
  protected client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  public async get(country?: string): Promise<any> {
    let url = 'timezones';

    if (country) {
      url += `/${country}`;
    }

    return await this.client.get(url);
  }
}
