import mockAxios from 'axios';

import Notifications from '../constants/notifications';
import Answer from '../models/answer';
import Attendee from '../models/attendee';
import Response from '../models/response';
import Appointment, { AppointmentMatcherParameters, AppointmentNotificationParameters } from './appointment';

it('can set the invitation property', async () => {
  const resource = new Appointment(mockAxios);

  expect(resource.via(1)).toHaveProperty('filters', {
    invitation: 1,
  });
});

it('can set the location property', async () => {
  const resource = new Appointment(mockAxios);

  expect(resource.at(1)).toHaveProperty('filters', {
    location: 1,
  });
});

it('can set the user property', async () => {
  const resource = new Appointment(mockAxios);

  expect(resource.by(1)).toHaveProperty('filters', {
    user: 1,
  });
});

it('can set the service property using a single number', async () => {
  const resource = new Appointment(mockAxios);

  expect(resource.for(1)).toHaveProperty('filters', {
    services: 1,
  });
});

it('can set the service property using a multiple numbers', async () => {
  const resource = new Appointment(mockAxios);

  expect(resource.for([1, 2])).toHaveProperty('filters', {
    services: [1, 2],
  });
});

it('can set the source property', async () => {
  const resource = new Appointment(mockAxios);

  expect(resource.source('test source')).toHaveProperty('filters', {
      source: 'test source',
  });
});

it('can set the notifications property', async () => {
  const resource = new Appointment(mockAxios);
  const notifications: AppointmentNotificationParameters = {
    client: true,
    user: true,
  };

  expect(resource.notify(notifications)).toHaveProperty('filters', {
    notifications,
  });
});

it('can set the starting time property', async () => {
  const resource = new Appointment(mockAxios);
  const start = '2018-01-01 12:00:00';

  expect(resource.starting(start)).toHaveProperty('filters', {
    start,
  });
});

it('can set a single attendee for the appointment', async () => {
  const resource = new Appointment(mockAxios);
  const attendee = new Attendee();

  expect(resource.with(attendee)).toHaveProperty('relationships', {
    attendees: [attendee],
  });
});

it('can set multiple attendees for the appointment', async () => {
  const resource = new Appointment(mockAxios);
  const attendee = new Attendee();

  expect(resource.with([attendee, attendee])).toHaveProperty('relationships', {
    attendees: [attendee, attendee],
  });
});

it('can book an appointment with the minimum required parameters', async () => {
  const resource = new Appointment(mockAxios);
  const start = '2018-01-01 12:00:00';
  const attendee = new Attendee();

  await resource
    .at(1)
    .for(2)
    .starting(start)
    .with(attendee.named('Jane', 'Doe').reachable({ email: 'jane@doe.com' }))
    .book();

  expect(mockAxios.post).toHaveBeenCalledTimes(1);
  expect(mockAxios.post).toHaveBeenCalledWith('appointments', {
    data: {
      attributes: {
        invitation_id: null,
        location_id: 1,
        service_id: 2,
        staff_id: null,
        start,
      },
      relationships: {
        attendees: {
          data: [
            {
              attributes: {
                email: 'jane@doe.com',
                first_name: 'Jane',
                last_name: 'Doe',
              },
              type: 'attendees',
            },
          ],
        },
      },
      type: 'appointments',
    },
  });
});

it('can book an appointment with all available parameters', async () => {
  const resource = new Appointment(mockAxios);
  const start = '2018-01-01 12:00:00';
  const attendee = new Attendee();
  const answer = new Answer();
  const notifications = [Notifications.CLIENT, Notifications.USER, Notifications.ALL];

  notifications.forEach(async (notification: object) => {
    await resource
      .at(1)
      .for([2, 3])
      .by(4)
      .via(5)
      .starting(start)
      .source('test source')
      .with(
        attendee
          .named('Jane', 'Doe')
          .reachable({
            cell_phone: '5555555555',
            email: 'jane@doe.com',
            phone: '5555555555',
            work_phone: '5555555555',
          })
          .located({
            address: '123 Fake St',
            city: 'Fake City',
            country: 'FC',
            postcode: 'X0X 0X0',
            region: 'FR',
            timezone: 'UTC',
          })
          .messagable()
          .provided('notes')
          .speaks('es')
          .answers(answer.for(1).is('this answer')),
      )
    .notify(notification)
    .book();

    expect(mockAxios.post).toHaveBeenCalledWith('appointments', {
      data: {
        attributes: {
          invitation_id: 5,
          location_id: 1,
          service_id: [2, 3],
          staff_id: 4,
          start,
        },
        relationships: {
          attendees: {
            data: [
              {
                attributes: {
                  address: '123 Fake St',
                  cell_phone: '5555555555',
                  city: 'Fake City',
                  country: 'FC',
                  email: 'jane@doe.com',
                  first_name: 'Jane',
                  lang: 'es',
                  last_name: 'Doe',
                  notes: 'notes',
                  phone: '5555555555',
                  prov_state: 'FR',
                  receive_sms: true,
                  timezone: 'UTC',
                  work_phone: '5555555555',
                  zip_postal: 'X0X 0X0',
                },
                relationships: {
                  answers: {
                    data: [
                      {
                        attributes: {
                          question_id: 1,
                          value: 'this answer',
                        },
                        type: 'answers',
                      },
                    ],
                  },
                },
                type: 'attendees',
              },
            ],
          },
        },
        type: 'appointments',
      },
      meta: {
        notify: notification,
        source: 'test source',
      },
    });

    expect(mockAxios.post).toHaveBeenCalledTimes(3);
  });
});

it('can retrieve matching appointments using a given set of matchers', async () => {
  const resource = new Appointment(mockAxios);
  const matchers: AppointmentMatcherParameters = {
    code: 'A9B8C7D6E5F4G3H2',
    email: 'jane@doe.com',
    id: 1,
  };

  await resource.matching(matchers).get();

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith('appointments', {
    params: matchers,
  });
});

it('can cancel the given appointment for the given attendee', async () => {
  const resource = new Appointment(mockAxios);

  await resource.cancel(1, 2);

  expect(mockAxios.delete).toHaveBeenCalledTimes(1);
  expect(mockAxios.delete).toHaveBeenCalledWith('appointments/1/2', {});
});

it('can cancel the given appointment for the given attendee while provided responses', async () => {
  const resource = new Appointment(mockAxios);
  const attendee = new Attendee();
  const responses = [
    (new Response()).for(1).is('the response'),
    (new Response()).for(2).selected(1),
  ];

  await resource
    .with(
      attendee.as(2).responses(responses)
    )
    .cancel(1, 2);

  expect(mockAxios.delete).toHaveBeenCalledWith('appointments/1/2', {
    data: {
      relationships: {
        attendees: {
          data: [
            {
              id: 2,
              relationships: {
                responses: {
                  data: [
                    {
                      attributes: {
                        form_question_id: 1,
                        value: 'the response',
                      },
                      type: 'responses',
                    },
                    {
                      attributes: {
                        form_option_id: 1,
                        form_question_id: 2,
                      },
                      type: 'responses',
                    },
                  ]
                }
              },
              type: 'attendees',
            }
          ]
        }
      },
      type: 'appointments',
    },
  });
});

it('can conditionally set a filter', async () => {
  const resource = new Appointment(mockAxios);

  const expected = expect(
    resource.when(true, (appointment: Appointment) => appointment.at(1)),
  );

  expected.toHaveProperty('filters', {
    location: 1,
  });
});

it('can conditionally not set a filter', async () => {
  const resource = new Appointment(mockAxios);

  const expected = expect(
    resource.when(false, (appointment: Appointment) => appointment.at(1)),
  );

  expected.toHaveProperty('filters', {});
});
