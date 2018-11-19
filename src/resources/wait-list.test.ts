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

it('can create a new wait list request for a given client', async () => {
  //
});

it('can retrieve a clients matching wait list request', async () => {
  const resource = new WaitList(mockAxios);

  await resource
    .belonging(1)
    .include('preferences')
    .find(2);

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith('clients/1/requests/2', {
    params: {
      include: 'preferences',
    },
  });
});

it('can retrieve a clients matching wait list request without including preferences', async () => {
  const resource = new WaitList(mockAxios);

  await resource
    .belonging(1)
    .find(2);

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith('clients/1/requests/2', { params: {} });
});

it('can update a clients wait list request', async () => {
  //
});

it('can delete a clients wait list request', async () => {
  const resource = new WaitList(mockAxios);

  await resource
    .belonging(1)
    .remove(2);

  expect(mockAxios.delete).toHaveBeenCalledTimes(1);
  expect(mockAxios.delete).toHaveBeenCalledWith('clients/1/requests/2');
});
