import mockAxios from 'axios';

import User from './user';

it('will set assigned filter', async () => {
  const resource = new User(mockAxios);

  expect(resource.assigned()).toHaveProperty('filters', {
    assigned: true,
  });
});

it('will set assigned filter to false', async () => {
  const resource = new User(mockAxios);

  expect(resource.assigned(false)).toHaveProperty('filters', {
    assigned: false,
  });
});

it('will set location filter using a number', async () => {
  const resource = new User(mockAxios);

  expect(resource.at(1)).toHaveProperty('filters', {
    location: 1,
  });
});

it('will set location filter using a string', async () => {
  const resource = new User(mockAxios);

  expect(resource.at('identifier')).toHaveProperty('filters', {
    location: 'identifier',
  });
});

it('will set user filter using a string', async () => {
  const resource = new User(mockAxios);

  expect(resource.find('1')).toHaveProperty('filters', {
    user: '1',
  });
});

it('will set user filter using a number', async () => {
  const resource = new User(mockAxios);

  expect(resource.find(1)).toHaveProperty('filters', {
    user: 1,
  });
});

it('will set the page we are on', async () => {
  const resource = new User(mockAxios);

  expect(resource.on(4)).toHaveProperty('page', 4);
});

it('will set service filter using a number', async () => {
  const resource = new User(mockAxios);

  expect(resource.performing(1)).toHaveProperty('filters', {
    services: 1,
  });
});

it('will set service filter using an array of numbers', async () => {
  const resource = new User(mockAxios);

  expect(resource.performing([1, 2])).toHaveProperty('filters', {
    services: [1, 2],
  });
});

it('will set service filter using a string', async () => {
  const resource = new User(mockAxios);

  expect(resource.performing('identifier')).toHaveProperty('filters', {
    services: 'identifier',
  });
});

it('will set service filter using an array of strings', async () => {
  const resource = new User(mockAxios);

  expect(resource.performing(['identifier', 'other'])).toHaveProperty('filters', {
    services: ['identifier', 'other'],
  });
});

it('will set the limit given', async () => {
  const resource = new User(mockAxios);

  expect(resource.take(5)).toHaveProperty('limit', 5);
});

it('will set the sortable filter', async () => {
  const resource = new User(mockAxios);

  expect(resource.sortBy('first_name,-created')).toHaveProperty('sortable', 'first_name,-created');
});

it('can string all filterable options together', async () => {
  const resource = new User(mockAxios);

  const expected = expect(
    resource
      .assigned()
      .at(1)
      .performing([1, 2])
      .sortBy('created')
      .find(1)
      .take(5)
      .on(1),
  );

  expected.toHaveProperty('filters', {
    assigned: true,
    location: 1,
    services: [1, 2],
    user: 1,
  });
  expected.toHaveProperty('sortable', 'created');
  expected.toHaveProperty('limit', 5);
  expected.toHaveProperty('page', 1);
});

it('can get users without additional parameters', async () => {
  const resource = new User(mockAxios);

  await resource.get();

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith('users', { params: {} });
});

it('can get users with additional parameters', async () => {
  const resource = new User(mockAxios);

  await resource
    .assigned()
    .at(1)
    .performing([1, 2])
    .find(1)
    .sortBy('created')
    .take(5)
    .on(1)
    .get();

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith('users', {
    params: {
      'filter[assignments]': true,
      'filter[location]': 1,
      'filter[service]': [1, 2],
      'filter[user]': 1,
      limit: 5,
      page: 1,
      sort: 'created',
    },
  });
});

it('can conditionally set a filter', async () => {
  const resource = new User(mockAxios);

  const expected = expect(
    resource.when(true, (user: User) => user.assigned()),
  );

  expected.toHaveProperty('filters', {
    assigned: true,
  });
});

it('can conditionally not set a filter', async () => {
  const resource = new User(mockAxios);

  const expected = expect(
    resource.when(false, (user: User) => user.assigned()),
  );

  expected.toHaveProperty('filters', {});
});
