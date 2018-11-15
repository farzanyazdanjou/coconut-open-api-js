import mockAxios from 'axios';

import Client from './client';

it('will be constructed using passed in options', async () => {
  Client('admin');

  expect(mockAxios.create).toHaveBeenCalledWith({
    baseURL: `https://admin.coconutcalendar.com/api/v2/open`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  });
});
