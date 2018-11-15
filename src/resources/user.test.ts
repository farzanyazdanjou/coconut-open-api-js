import mockAxios from 'axios';
import User from './user';

it('will set assigned filter', async () => {
  const resource = new User(mockAxios);

  expect(resource.assigned())
    .toHaveProperty('filters', {
      assigned: true,
    });
});

it('will set location filter using a number', async () => {
  const resource = new User(mockAxios);

  expect(resource.at(1))
    .toHaveProperty('filters', {
      location: 1,
    });
});

it('will set location filter using a string', async () => {
  const resource = new User(mockAxios);

  expect(resource.at('identifier'))
    .toHaveProperty('filters', {
      location: 'identifier',
    });
});

it('will set service filter using a number', async () => {
  const resource = new User(mockAxios);

  expect(resource.performing(1))
    .toHaveProperty('filters', {
      services: 1,
    });
});

it('will set service filter using an array of numbers', async () => {
  const resource = new User(mockAxios);

  expect(resource.performing([1, 2]))
    .toHaveProperty('filters', {
      services: [1, 2],
    });
});

it('will set service filter using a string', async () => {
  const resource = new User(mockAxios);

  expect(resource.performing('identifier'))
    .toHaveProperty('filters', {
      services: 'identifier',
    });
});

it('will set service filter using an array of strings', async () => {
  const resource = new User(mockAxios);

  expect(resource.performing(['identifier', 'other']))
    .toHaveProperty('filters', {
      services: ['identifier', 'other'],
    });
});

it('will set the sortable filter', async () => {
  const resource = new User(mockAxios);

  expect(resource.sortBy('first_name,-created'))
    .toHaveProperty('sortable', 'first_name,-created');
});

it('can string all filterable options together', async () => {
  const resource = new User(mockAxios);

  const expected = expect(
    resource.assigned()
      .at(1)
      .performing([1, 2])
      .sortBy('created')
  );

  expected.toHaveProperty('filters', {
    assigned: true,
    location: 1,
    services: [1, 2],
  });
  expected.toHaveProperty('sortable', 'created');
});
