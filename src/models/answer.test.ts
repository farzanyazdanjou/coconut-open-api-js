import Answer from './answer';

it('will set the question identifier and answer value', async () => {
  const answer = new Answer;

  expect(answer.for(1).is('the answer')).toHaveProperty('attributes', {
    question: 1,
    value: 'the answer',
  });
});
