import mockAxios from 'axios';

import Location from './location';

it('will set assigned filter', async () => {
  const resource = new Location(mockAxios);

  expect(resource.assigned()).toHaveProperty('filters', {
    assigned: true,
  });
});

it('will set assigned filter to false', async () => {
  const resource = new Location(mockAxios);

  expect(resource.assigned(false)).toHaveProperty('filters', {
    assigned: false,
  });
});

it('will set user filter using a number', async () => {
  const resource = new Location(mockAxios);

  expect(resource.containing(1)).toHaveProperty('filters', {
    user: 1,
  });
});

it('will set user filter using a string', async () => {
  const resource = new Location(mockAxios);

  expect(resource.containing('identifier')).toHaveProperty('filters', {
    user: 'identifier',
  });
});

it('will set the invite only filter', async () => {
  const resource = new Location(mockAxios);

  expect(resource.invitable()).toHaveProperty('filters', {
    invitable: 1,
  });
});

it('will set the page we are on', async () => {
  const resource = new Location(mockAxios);

  expect(resource.on(4)).toHaveProperty('page', 4);
});

it('will set service filter using a number', async () => {
  const resource = new Location(mockAxios);

  expect(resource.providing(1)).toHaveProperty('filters', {
    services: 1,
  });
});

it('will set service filter using an array of numbers', async () => {
  const resource = new Location(mockAxios);

  expect(resource.providing([1, 2])).toHaveProperty('filters', {
    services: [1, 2],
  });
});

it('will set service filter using a string', async () => {
  const resource = new Location(mockAxios);

  expect(resource.providing('identifier')).toHaveProperty('filters', {
    services: 'identifier',
  });
});

it('will set service filter using an array of strings', async () => {
  const resource = new Location(mockAxios);

  expect(resource.providing(['identifier', 'other'])).toHaveProperty('filters', {
    services: ['identifier', 'other'],
  });
});

it('will set the physical locations only filter', async () => {
  const resource = new Location(mockAxios);

  expect(resource.physical()).toHaveProperty('filters', {
    virtual: 0,
  });
});

it('will set the virtual locations only filter', async () => {
  const resource = new Location(mockAxios);

  expect(resource.virtual()).toHaveProperty('filters', {
    virtual: 1,
  });
});

it('will set the limit given', async () => {
  const resource = new Location(mockAxios);

  expect(resource.take(5)).toHaveProperty('limit', 5);
});

it('will set the sortable filter', async () => {
  const resource = new Location(mockAxios);

  expect(resource.sortBy('first_name,-created')).toHaveProperty('sortable', 'first_name,-created');
});

it('will set the locatable filters as supplied', async () => {
  const resource = new Location(mockAxios);
  const city = 'Fake City';
  const country = 'FC';
  const region = 'FR';

  expect(resource.located({ city, country, region })).toHaveProperty('filters', {
    city,
    country,
    region,
  })
});

it('can string all filterable options together', async () => {
  const resource = new Location(mockAxios);

  const expected = expect(
    resource
      .assigned()
      .providing([1, 2])
      .containing(1)
      .invitable()
      .sortBy('created')
      .physical()
      .located({ city: 'Fake City', country: 'FC', region: 'FR' })
      .take(5)
      .on(1),
  );

  expected.toHaveProperty('filters', {
    assigned: true,
    city: 'Fake City',
    country: 'FC',
    invitable: 1,
    region: 'FR',
    services: [1, 2],
    user: 1,
    virtual: 0,
  });
  expected.toHaveProperty('sortable', 'created');
  expected.toHaveProperty('limit', 5);
  expected.toHaveProperty('page', 1);
});

it('can get locations without additional parameters', async () => {
  const resource = new Location(mockAxios);

  await resource.get();

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith('locations', { params: {} });
});

it('can get locations with additional parameters', async () => {
  const resource = new Location(mockAxios);

  await resource
    .assigned()
    .providing([1, 2])
    .containing(1)
    .invitable()
    .physical()
    .located({ city: 'Fake City', country: 'FC', region: 'FR' })
    .sortBy('created')
    .take(5)
    .on(1)
    .get();

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith('locations', {
    params: {
      'filter[assignments]': true,
      'filter[city]': 'Fake City',
      'filter[country]': 'FC',
      'filter[invite_only]': 1,
      'filter[province]': 'FR',
      'filter[service]': [1, 2],
      'filter[user]': 1,
      'filter[virtual]': 0,
      limit: 5,
      page: 1,
      sort: 'created',
    },
  });
});

it('can conditionally set a filter', async () => {
  const resource = new Location(mockAxios);

  const expected = expect(
    resource.when(true, (location: Location) => location.assigned()),
  );

  expected.toHaveProperty('filters', {
    assigned: true,
  });
});

it('can conditionally not set a filter', async () => {
  const resource = new Location(mockAxios);

  const expected = expect(
    resource.when(false, (location: Location) => location.assigned()),
  );

  expected.toHaveProperty('filters', {});
});

it('can supply suggestions based on the provided query', async () => {
  const resource = new Location(mockAxios);

  await resource.suggest('Fake City');

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith('location-suggestions', {
    params: {
      'filter[query]': 'Fake City',
    },
  });
});

it('can fetch details for a given location identifier received from a suggestion', async () => {
  const resource = new Location(mockAxios);

  await resource.details('random_string_of_characters');

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith('location-details/random_string_of_characters');
});
