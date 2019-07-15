import Response from './response';

it('will set the question identifier and response value', async () => {
  const response = new Response();

  expect(response.for(1).is('the response')).toHaveProperty('attributes', {
    option: null,
    question: 1,
    value: 'the response',
  });
});

it('will set the question identifier and response option', async () => {
  const response = new Response();

  expect(response.for(1).selected(2)).toHaveProperty('attributes', {
    option: 2,
    question: 1,
    value: null,
  });
});
