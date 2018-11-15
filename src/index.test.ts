import OpenApi from './index';
import User from './resources/user';

it('will be constructed with appropriate required options', async () => {
  const instance = new OpenApi({
    domain: 'admin',
  });

  expect(instance).toHaveProperty('options', {
    domain: 'admin',
    version: 'v2',
  });
});

it('will be constructed with all options', async () => {
  const instance = new OpenApi({
    domain: 'admin',
    version: 'some-version',
  });

  expect(instance).toHaveProperty('options', {
    domain: 'admin',
    version: 'some-version',
  });
});

it('can access the user resource', async () => {
  const instance = new OpenApi({
    domain: 'admin',
  });

  expect(instance).toHaveProperty('users');
  expect(instance.users).toBeInstanceOf(User.prototype.constructor);
});
