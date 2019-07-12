import mockAxios from 'axios';

import Forms from '../constants/forms';
import Form from './form';

it('will set cancellation filter and necessary included resources', async () => {
  const resource = new Form(mockAxios);

  const expected = expect(resource.cancellations());

  expected.toHaveProperty('filters', {
    type: Forms.CANCELLATION,
  });
  expected.toHaveProperty('parameters', {
    include: 'questions.options',
  });
});

it('will set the page we are on', async () => {
  const resource = new Form(mockAxios);

  expect(resource.on(4)).toHaveProperty('page', 4);
});

it('will set the limit given', async () => {
  const resource = new Form(mockAxios);

  expect(resource.take(5)).toHaveProperty('limit', 5);
});

it('will set the sortable filter', async () => {
  const resource = new Form(mockAxios);

  expect(resource.sortBy('type,-created')).toHaveProperty('sortable', 'type,-created');
});

it('can string all filterable options together', async () => {
  const resource = new Form(mockAxios);

  const expected = expect(
    resource
      .cancellations()
      .sortBy('created')
      .take(5)
      .on(1),
  );

  expected.toHaveProperty('filters', {
    type: Forms.CANCELLATION,
  });
  expected.toHaveProperty('parameters', {
    include: 'questions.options',
  });
  expected.toHaveProperty('sortable', 'created');
  expected.toHaveProperty('limit', 5);
  expected.toHaveProperty('page', 1);
});

it('can get forms without additional parameters', async () => {
  const resource = new Form(mockAxios);

  await resource.get();

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith('forms', { params: {} });
});

it('can get forms with additional parameters', async () => {
  const resource = new Form(mockAxios);

  await resource
    .cancellations()
    .sortBy('created')
    .take(5)
    .on(1)
    .get();

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith('forms', {
    params: {
      'filter[type]': Forms.CANCELLATION,
      include: 'questions.options',
      limit: 5,
      page: 1,
      sort: 'created',
    },
  });
});
