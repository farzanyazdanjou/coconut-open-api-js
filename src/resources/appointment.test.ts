import Appointment from './appointment';
import Attendee from '../models/attendee';
import { AppointmentNotificationParameters } from '../types/parameters';

it('can set the location property', async () => {
  const appointment = new Appointment;

  expect(appointment.at(1)).toHaveProperty('location', 1);
});

it('can set the user property', async () => {
  const appointment = new Appointment;

  expect(appointment.by(1)).toHaveProperty('user', 1);
});

it('can set the service property using a single number', async () => {
  const appointment = new Appointment;

  expect(appointment.for(1)).toHaveProperty('services', 1);
});

it('can set the service property using a multiple numbers', async () => {
  const appointment = new Appointment;

  expect(appointment.for([1, 2])).toHaveProperty('services', [1, 2]);
});

it('can set the notifications property', async () => {
  const appointment = new Appointment;
  const notifications: AppointmentNotificationParameters = {
    client: true,
    user: true,
  };

  expect(appointment.notify(notifications)).toHaveProperty('notifications', notifications);
});

it('can set a single attendee for the appointment', async () => {
  const appointment = new Appointment;
  const attendee = new Attendee;

  expect(appointment.with(attendee)).toHaveProperty('attendees', [attendee]);
});

it('can set multiple attendees for the appointment', async () => {
  const appointment = new Appointment;
  const attendee = new Attendee;

  expect(appointment.with([attendee, attendee])).toHaveProperty('attendees', [attendee, attendee]);
});
