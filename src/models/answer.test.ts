import Answer from './answer';

it('will set the question identifier', async () => {
  const answer = new Answer;

  expect(answer.for(1)).toHaveProperty('question', 1);
});

it('will set the answer value', async () => {
  const answer = new Answer;

  expect(answer.is('the answer')).toHaveProperty('value', 'the answer');
});
