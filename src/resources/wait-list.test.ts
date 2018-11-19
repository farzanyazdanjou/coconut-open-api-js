import mockAxios from 'axios';

import WaitList from './wait-list';

it('will set location filter using a number', async () => {
  const resource = new WaitList(mockAxios);

  expect(resource.at(1)).toHaveProperty('filters', {
    location: 1,
  });
});

it('will set location filter using a numeric string', async () => {
  const resource = new WaitList(mockAxios);

  expect(resource.at('1')).toHaveProperty('filters', {
    location: '1',
  });
});

it('will set service filter using a number', async () => {
  const resource = new WaitList(mockAxios);

  expect(resource.seeking(1)).toHaveProperty('filters', {
    service: 1,
  });
});

it('will set service filter using a numeric string', async () => {
  const resource = new WaitList(mockAxios);

  expect(resource.seeking('1')).toHaveProperty('filters', {
    service: '1',
  });
});

it('will set user filter using a number', async () => {
  const resource = new WaitList(mockAxios);

  expect(resource.with(1)).toHaveProperty('filters', {
    user: 1,
  });
});

it('will set user filter using a numeric string', async () => {
  const resource = new WaitList(mockAxios);

  expect(resource.with('1')).toHaveProperty('filters', {
    user: '1',
  });
});

it('will set the client parameter using a number', async () => {
  const resource = new WaitList(mockAxios);

  expect(resource.belonging(1)).toHaveProperty('parameters', {
    client: 1,
  });
});

it('will set the client parameter using a numeric string', async () => {
  const resource = new WaitList(mockAxios);

  expect(resource.belonging('1')).toHaveProperty('parameters', {
    client: '1',
  });
});

it('will set the includes parameter using a comma separated string', async () => {
  const resource = new WaitList(mockAxios);

  expect(resource.include('relationships,go,here')).toHaveProperty('parameters', {
    include: 'relationships,go,here',
  });
});
