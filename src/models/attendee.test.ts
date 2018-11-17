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
