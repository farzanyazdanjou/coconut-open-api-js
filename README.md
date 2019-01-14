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

### Locations

##### Methods

- `assigned(assigned: boolean = true)`

Set a filter which will tell the API to return locations that have a public user and service assignments.

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
import OpenApi from 'coconut-open-api-js';

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

### Services

##### Methods

- `assigned(assigned: boolean = true)`

Set a filter which will tell the API to return services that have a public user and location assignments.

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
import OpenApi from 'coconut-open-api-js';

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
