import OpenApi from './index';
import Question from './resources/question';
import Service from './resources/service';
import Setting from './resources/setting';
import User from './resources/user';

it('will be constructed properly', async () => {
  const instance = new OpenApi('admin');

  expect(instance).toHaveProperty('client');
  expect(instance).toHaveProperty('domain');
});

it('can access the user resource', async () => {
  const instance = new OpenApi('admin');

  expect(instance).toHaveProperty('users');
  expect(instance.users).toBeInstanceOf(User.prototype.constructor);
});

it('can access the setting resource', async () => {
  const instance = new OpenApi('admin');

  expect(instance).toHaveProperty('settings');
  expect(instance.settings).toBeInstanceOf(Setting.prototype.constructor);
});

it('can access the service resource', async () => {
  const instance = new OpenApi('admin');

  expect(instance).toHaveProperty('services');
  expect(instance.services).toBeInstanceOf(Service.prototype.constructor);
});

it('can access the question resource', async () => {
  const instance = new OpenApi('admin');

  expect(instance).toHaveProperty('questions');
  expect(instance.questions).toBeInstanceOf(Question.prototype.constructor);
});
