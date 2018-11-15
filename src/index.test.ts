import OpenApi from './index';

it('will be constructed with appropriate options', async () => {
  const instance = new OpenApi({
    domain: 'admin',
  });

  expect(instance).toHaveProperty('options', {
    domain: 'admin',
    version: 'v2',
  });
});
