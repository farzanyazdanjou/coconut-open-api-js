import { OpenApi } from './index';
import Appointment from './resources/appointment';
import Form from './resources/form';
import Location from './resources/location';
import Question from './resources/question';
import Service from './resources/service';
import Setting from './resources/setting';
import TimeSlot from './resources/time-slot';
import Timezone from './resources/timezone';
import User from './resources/user';
import WaitList from './resources/wait-list';

it('will be constructed properly', async () => {
  const instance = new OpenApi('admin');

  expect(instance).toHaveProperty('client');
  expect(instance).toHaveProperty('domain');
});

it('can access the user resource', async () => {
  const instance = new OpenApi('admin');

  expect(instance.users()).toBeInstanceOf(User.prototype.constructor);
});

it('can access the setting resource', async () => {
  const instance = new OpenApi('admin');

  expect(instance.settings()).toBeInstanceOf(Setting.prototype.constructor);
});

it('can access the service resource', async () => {
  const instance = new OpenApi('admin');

  expect(instance.services()).toBeInstanceOf(Service.prototype.constructor);
});

it('can access the question resource', async () => {
  const instance = new OpenApi('admin');

  expect(instance.questions()).toBeInstanceOf(Question.prototype.constructor);
});

it('can access the location resource', async () => {
  const instance = new OpenApi('admin');

  expect(instance.locations()).toBeInstanceOf(Location.prototype.constructor);
});

it('can access the slots resource', async () => {
  const instance = new OpenApi('admin');

  expect(instance.slots()).toBeInstanceOf(TimeSlot.prototype.constructor);
});

it('can access the wait list resource', async () => {
  const instance = new OpenApi('admin');

  expect(instance.lists()).toBeInstanceOf(WaitList.prototype.constructor);
});

it('can access the appointment resource', async () => {
  const instance = new OpenApi('admin');

  expect(instance.appointments()).toBeInstanceOf(Appointment.prototype.constructor);
});

it('can access the timezone resource', async () => {
  const instance = new OpenApi('admin');

  expect(instance.timezones()).toBeInstanceOf(Timezone.prototype.constructor);
});

it('can access the forms resource', async () => {
  const instance = new OpenApi('admin');

  expect(instance.forms()).toBeInstanceOf(Form.prototype.constructor);
});
