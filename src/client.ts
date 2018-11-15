import axios, { AxiosInstance } from 'axios';

import { OpenApiOptions } from './types/options';

const Client = ({ domain, version }: OpenApiOptions): AxiosInstance => {
  return axios.create({
    baseURL: `https://${domain}.coconutcalendar.com/api/${version}/open`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  });
};

export default Client;
