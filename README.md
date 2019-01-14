# Coconut Open API JS SDK

[![npm Version][ico-version]][link-npm]
[![Software License][ico-license]](LICENSE.md)
[![Build Status][ico-travis]][link-travis]
[![Coverage Status][ico-codecov]][link-codecov]
[![npm downloads][ico-downloads]][link-downloads]

## Install

Using npm:

```bash
$ npm install coconut-open-api-js
```

Using yarn:

```bash
$ yarn add coconut-open-api-js
```

## Usage

### Appointments

##### Methods

- `at(location: number)`

Set a relationship which will tell the API to use the given location identifier when creating an appointment.

- `book()`

Create a new appointment using the pre-set parameters.

- `by(user: number)`

Set a relationship which will tell the API to use the given user identifier when creating an appointment.

- `cancel(appointment: number, attendee: number)`

Cancel an appointment for a specific attendee matching the given appointment and attendee identifiers.

- `for(services: number | numbers[])`

Set a relationship which will tell the API to use the given service identifier when creating an appointment.

- `get()`

Find an appointment matching the pre-set matching parameters.

- `matching(matchers: AppointmentMatcherParameters)`

Set a filter to use in order to find an existing appointment.

- `notify(notifications: AppointmentNotificationParameters)`

Set a filter to determine who should be notified when booking an appointment.

- `starting(start: string)`

Set an attribute which will tell the API to use the given start date time string as the start time of the new appointment.

- `with(attendees: AttendeeModel | AttendeeModel[])`

Set a relationship which will tell the API to use the given attendee model(s) when creating a new appointment.

##### Example

// TODO: Add example including attendee models for booking, cancelling and retrieving appointments.

### Locations

##### Methods

- `assigned(assigned: boolean = true)`

Set a filter which will tell the API to return locations that have public user and service assignments.

- `containing(user: number | string)`

Set a filter which will tell the API to return locations where the supplied user identifier is assigned.

- `get()`

Send the API request using the pre-set filters.

- `invitable()`

Set a filter which will tell the API to return locations that are specifically invite only.

- `on(page: number)`

Set the page offset which you want to view.

- `providing(services: number | number[] | string | string[])`

Set a filter which will tell the API to return locations where the supplied service identifier(s) is / are assigned.

- `sortBy(sortable: string)`

Set a sorting string to determine how the returned results are sorted.

- `take(limit: number)`

Set the limit which you want returned.

##### Example

```javascript
import { OpenApi } from 'coconut-open-api-js';

class Locations {
  constructor() {
    this.api = new OpenApi();
  }

  async get() {
    return await this.api
        .locations
        .assigned()
        .containing(1)
        .invitable()
        .providing([2, 3])
        .sortBy('name,-created')
        .on(2)
        .take(10)
        .get();
  }
}
```

### Questions

##### Methods

- `for(services: number | number[] | string | string[])`

Set a filter which will tell the API to return questions which are specifically assigned to the given service identifier(s).

- `get()`

Send the API request using the pre-set filters.

- `on(page: number)`

Set the page offset which you want to view.

- `sortBy(sortable: string)`

Set a sorting string to determine how the returned results are sorted.

- `take(limit: number)`

Set the limit which you want returned.

##### Example

```javascript
import { OpenApi } from 'coconut-open-api-js';

class Questions {
  constructor() {
    this.api = new OpenApi();
  }

  async get() {
    return await this.api
        .questions
        .for([1, 2, 3])
        .on(2)
        .sortBy('label,-required')
        .take(10)
        .get()
  }
}
```

### Services

##### Methods

- `assigned(assigned: boolean = true)`

Set a filter which will tell the API to return services that have public user and location assignments.

- `at(location: number | string)`

Set a filter which will tell the API to return services that are provided at the location matching the provided identifier.

- `by(user: number | string)`

Set a filter which will tell the API to return services that are provided by the user matching the provided identifier.

- `get()`

Send the API request using the pre-set filters.

- `in(category: number | string)`

Set a filter which will tell the API to return services that match the given category identifier.

- `invitable()`

Set a filter which will tell the API to return services that are specifically invite only.

- `on(page: number)`

Set the page offset which you want to view.

- `sortBy(sortable: string)`

Set a sorting string to determine how the returned results are sorted.

- `take(limit: number)`

Set the limit which you want returned.

##### Example

```javascript
import { OpenApi } from 'coconut-open-api-js';

class Services {
  constructor() {
    this.api = new OpenApi();
  }

  async get() {
    return await this.api
        .services
        .assigned()
        .at(1)
        .by(2)
        .in(3)
        .invitable()
        .on(2)
        .sortBy('name,-created')
        .take(10)
        .get()
  }
}
```

### Settings

##### Methods

- `get()`

Send the API request.

##### Example

```javascript
import { OpenApi } from 'coconut-open-api-js';

class Settings {
  constructor() {
    this.api = new OpenApi();
  }

  async get() {
    return await this.api.settings.get();
  }
}
```

### Time Slots

##### Methods

- `at(location: number)`

Set a filter which will tell the API to return time slots at the location matching the provided identifier.

- `between(start: string, end: string)`

Set a filter which will tell the API to return time slots between a given start and end date time string.

- `by(user: number)`

Set a filter which will tell the API to return time slots that are specifically for the user matching the provided identifier.

- `for(services: number | number[])`

Set a filter which will tell the API to return time slots that are specifically for the service(s) matching the provided identifier(s).

- `get()`

Send the API request using the pre-set filters.

##### Example

```javascript
import { OpenApi } from 'coconut-open-api-js';

class TimeSlots {
  constructor() {
    this.api = new OpenApi();
  }

  async get() {
    return await this.api
        .slots
        .at(1)
        .by(2)
        .for(3)
        .between('2019-01-01', '2019-01-14')
        .get()
  }
}
```

### Users

##### Methods

- `assigned(assigned: boolean = true)`

Set a filter which will tell the API to return users that have public location and service assignment.

- `at(location: number | string)`

Set a filter which will tell the API to return users that are assigned at the location matching the provided identifier.

- `get()`

Send the API request using the pre-set filters.

- `on(page: number)`

Set the page offset which you want to view.

- `performing(services: number | number[] | string | string[])`

Set a filter which will tell the API to return users that are assigned to the service(s) matching the provided identifier(s).

- `sortBy(sortable: string)`

Set a sorting string to determine how the returned results are sorted.

- `take(limit: number)`

Set the limit which you want returned.

##### Example

```javascript
import { OpenApi } from 'coconut-open-api-js';

class Users {
  constructor() {
    this.api = new OpenApi();
  }

  async get() {
    return await this.api
        .users
        .assigned()
        .at(1)
        .performing([2, 3])
        .on(2)
        .sortBy('sort_order')
        .take(10)
        .get();
  }
}
```

### Wait Lists

##### Methods

- `add()`

Create a new wait list request using the pre-set parameters.

- `at(location: number | string)`

Set a relationship which will tell the API to use the given location identifier when creating or updating a wait list request.

- `belonging(client: number | string)`

Set a parameter which will tell the API to use the given client identifier when looking for an existing wait list request.

- `find(list: number | string)`

Find an existing wait list request matching the given identifier.

- `for(attendee: AttendeeModel)`

Set a relationship which will tell the API to use the given attendee model when creating or updating a wait list request.

- `include(includes: string)`

Set an inclusion parameter to include other relationships when fetching an existing wait list request.

- `prefers(preferences: PreferenceModel | PreferenceModel[])`

Set a relationship which will tell the API to use the given preference model(s) when creating or updating a wait list request.

- `provided(notes: string)`

Set an attribute which will tell the API to use the given notes as additional details when creating or updating a wait list request.

- `remove(list: number | string)`

Remove a pre-set client's wait list request that matches the given identifier.

- `seeking(service: number | string)`

Set a relationship which will tell the API to use the service identifier when creating or updating a wait list request.

- `update(list: number | string)`

Update the wait list request matching the given identifier with pre-set attributes / relationships.

- `with(user: number | string)`

Set a relationship which will tell the API to use the user identifier when creating or updating a wait list request.

##### Example

// TODO: Add example including preference and attendee models for creating, reading, updating and deleting wait list request preferences.

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Testing

```bash
$ yarn run test
```

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-version]: https://img.shields.io/npm/v/coconut-open-api-js.svg?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/coconutcalendar/coconut-open-api-js/master.svg?style=flat-square
[ico-codecov]: https://codecov.io/gh/coconutcalendar/coconut-open-api-js/branch/master/graph/badge.svg
[ico-downloads]: https://img.shields.io/npm/dt/coconut-open-api-js.svg?style=flat-square

[link-npm]: https://www.npmjs.org/package/coconut-open-api-js
[link-travis]: https://travis-ci.org/coconutcalendar/coconut-open-api-js
[link-codecov]: https://codecov.io/gh/coconutcalendar/coconut-open-api-js
[link-downloads]: http://npm-stat.com/charts.html?package=coconut-open-api-js
