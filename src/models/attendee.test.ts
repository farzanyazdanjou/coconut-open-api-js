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
