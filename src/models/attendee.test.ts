import Answer from './answer';
import Attendee from './attendee';

it('can set answers when providing a single answer', async () => {
  const answer = new Answer;
  const attendee = new Attendee;

  expect(attendee.answers(answer).getAttributes()).toEqual(
    expect.objectContaining({
      answers: [answer],
    })
  );
});

it('can set answers when providing multiple answers', async () => {
  const answer = new Answer;
  const attendee = new Attendee;

  expect(attendee.answers([answer, answer]).getAttributes()).toEqual(
    expect.objectContaining({
      answers: [answer, answer],
    })
  );
});

it('can set location detail parameters and maintain existing attributes', async () => {
  const attendee = new Attendee;
  const details = {
    address: '123 Fake St',
    city: 'Fake City',
    country: 'FC',
    postcode: 'X0X 0X0',
    region: 'FR',
    timezone: 'UTC',
  };

  expect(attendee.located(details).getAttributes()).toEqual(
    expect.objectContaining({
      ...attendee.getAttributes(),
      ...details
    })
  );
});

it('can set that an attendee is messagable', async () => {
  const attendee = new Attendee;

  expect(attendee.messagable().getAttributes()).toEqual(
    expect.objectContaining({
      messagable: true,
    })
  );
});

it('can set an attendees first and last name', async () => {
  const attendee = new Attendee;

  expect(attendee.named('Jane', 'Doe').getAttributes()).toEqual(
    expect.objectContaining({
      first_name: 'Jane',
      last_name: 'Doe',
    })
  );
});

it('can set any additional notes an attendee provides', async () => {
  const attendee = new Attendee;

  expect(attendee.provided('notes').getAttributes()).toEqual(
    expect.objectContaining({
      notes: 'notes',
    })
  );
});

it('can set the reachable details and maintain existing attributes', async () => {
  const attendee = new Attendee;
  const details = {
    cell_phone: '5555555555',
    email: 'jane@doe.com',
    phone: '5555555555',
    work_phone: '5555555555',
  };

  expect(attendee.reachable(details).getAttributes()).toEqual(
    expect.objectContaining({
      ...attendee.getAttributes(),
      ...details
    })
  );
});

it('can set the language of the attendee', async () => {
  const attendee = new Attendee;

  expect(attendee.speaks('es').getAttributes()).toEqual(
    expect.objectContaining({
      language: 'es',
    })
  )
});
