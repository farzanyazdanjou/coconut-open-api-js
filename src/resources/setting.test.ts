import mockAxios from 'axios';

import Setting from './setting';

it('can get settings', async () => {
  const resource = new Setting(mockAxios);

  await resource.get();

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith('settings');
});
