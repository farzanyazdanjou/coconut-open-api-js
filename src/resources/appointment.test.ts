import mockAxios from 'axios';

import Attendee from '../models/attendee';
import { AppointmentNotificationParameters } from '../types/parameters';
import Appointment from './appointment';

it('can set the location property', async () => {
  const resource = new Appointment(mockAxios);

  expect(resource.at(1)).toHaveProperty('location', 1);
});

it('can set the user property', async () => {
  const resource = new Appointment(mockAxios);

  expect(resource.by(1)).toHaveProperty('user', 1);
});

it('can set the service property using a single number', async () => {
  const resource = new Appointment(mockAxios);

  expect(resource.for(1)).toHaveProperty('services', 1);
});

it('can set the service property using a multiple numbers', async () => {
  const resource = new Appointment(mockAxios);

  expect(resource.for([1, 2])).toHaveProperty('services', [1, 2]);
});

it('can set the notifications property', async () => {
  const resource = new Appointment(mockAxios);
  const notifications: AppointmentNotificationParameters = {
    client: true,
    user: true,
  };

  expect(resource.notify(notifications)).toHaveProperty('notifications', notifications);
});

it('can set a single attendee for the appointment', async () => {
  const resource = new Appointment(mockAxios);
  const attendee = new Attendee;

  expect(resource.with(attendee)).toHaveProperty('attendees', [attendee]);
});

it('can set multiple attendees for the appointment', async () => {
  const resource = new Appointment(mockAxios);
  const attendee = new Attendee;

  expect(resource.with([attendee, attendee])).toHaveProperty('attendees', [attendee, attendee]);
});

it('can cancel the given appointment for the given attendee', async () => {
  const resource = new Appointment(mockAxios);

  await resource.cancel(1, 2);

  expect(mockAxios.delete).toHaveBeenCalledTimes(1);
  expect(mockAxios.delete).toBeCalledWith('appointments/1/2');
});
