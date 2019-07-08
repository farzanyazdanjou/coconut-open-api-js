# Changelog

## [Unreleased]

## [0.6.0] - 2019-07-08

- Ensures attendees messageable attribute can be set to false [`d7cbf0193c`](https://github.com/coconutcalendar/coconut-open-api-js/commit/d7cbf0193c)

## [0.5.4] - 2019-07-05

- Adds missing notes to attendee request parameters [`7c4e417e5f`](https://github.com/coconutcalendar/coconut-open-api-js/commit/7c4e417e5f)

## [0.5.3] - 2019-06-25

- Adds new filter to user resource [`ed5490539d`](https://github.com/coconutcalendar/coconut-open-api-js/commit/ed5490539d)

## [0.5.2] - 2019-06-24

- Switches questions service filter to use new filter on backend which is more inline on what we are wanting to retrieve [`7f43f429d6`](https://github.com/coconutcalendar/coconut-open-api-js/commit/7f43f429d6)

## [0.5.1] - 2019-06-20

- Ensures group filters are sent with request when provided [`632ace302c`](https://github.com/coconutcalendar/coconut-open-api-js/commit/632ace302c)
- Adds group and individual filters to service resource [`2151c0b9cc`](https://github.com/coconutcalendar/coconut-open-api-js/commit/2151c0b9cc)
- Ensures virtual filters are sent with request when provided [`5536eea650`](https://github.com/coconutcalendar/coconut-open-api-js/commit/5536eea650)
- Adds virtual and physical filters to location resource [`d0007e5bf5`](https://github.com/coconutcalendar/coconut-open-api-js/commit/d0007e5bf5)
- Ensures timezone filter is sent with request when provided [`3456efe551`](https://github.com/coconutcalendar/coconut-open-api-js/commit/3456efe551)
- Adds timezone filter to time slot resource [`8ad5ea7cab`](https://github.com/coconutcalendar/coconut-open-api-js/commit/8ad5ea7cab)

## [0.5.0] - 2019-06-04

- Changes all getters to public methods [`df87d3d429`](https://github.com/coconutcalendar/coconut-open-api-js/commit/df87d3d429)

## [0.4.0] - 2019-06-04

- Fixes improperly named filter parameters [`32f59f0bf9`](https://github.com/coconutcalendar/coconut-open-api-js/commit/32f59f0bf9)

## [0.3.5] - 2019-05-28

- Adds timezone resource [`cef6cd2981`](https://github.com/coconutcalendar/coconut-open-api-js/commit/cef6cd2981)

## [0.3.4] - 2019-05-18

- Updates typings to include the conditional resource [`d38fba9aa2`](https://github.com/coconutcalendar/coconut-open-api-js/commit/d38fba9aa2)

## [0.3.3] - 2019-05-14

- Adds conditional method to most resources [`5d293405b9`](https://github.com/coconutcalendar/coconut-open-api-js/commit/5d293405b9)

## [0.3.2] - 2019-05-13

- Allows domain to be optional when constructing the client [`663e9f8d1d`](https://github.com/coconutcalendar/coconut-open-api-js/commit/663e9f8d1d)

## [0.3.1] - 2019-01-15

### Fixed
- Fixes improperly named import [`10825f1727`](https://github.com/coconutcalendar/coconut-open-api-js/commit/10825f1727)

## [0.3.0] - 2019-01-15

### Added
- Adds link to official api documentation [`8b070dc163`](https://github.com/coconutcalendar/coconut-open-api-js/commit/8b070dc163)
- Adds missing documentation. Updates examples to not use hard coded values [`c70cb51bf7`](https://github.com/coconutcalendar/coconut-open-api-js/commit/c70cb51bf7)
- Adds preference model documentation [`07f16da18b`](https://github.com/coconutcalendar/coconut-open-api-js/commit/07f16da18b)
- Adds documentation for answer and attendee models [`3006df17f3`](https://github.com/coconutcalendar/coconut-open-api-js/commit/3006df17f3)
- Converts export to not use default. Exports model classes from entrypoint. Updates existing documentation [`6cf45fdaa6`](https://github.com/coconutcalendar/coconut-open-api-js/commit/6cf45fdaa6)
- Adds accessors for appointment and wait list resources [`60a0618c89`](https://github.com/coconutcalendar/coconut-open-api-js/commit/60a0618c89)
- Adds appointment resource documentation without examples [`2bb8d7e445`](https://github.com/coconutcalendar/coconut-open-api-js/commit/2bb8d7e445)
- Adds wait list resource documentation without examples [`b929edfc3f`](https://github.com/coconutcalendar/coconut-open-api-js/commit/b929edfc3f)
- Adds user resource documentation [`4f7ca7d393`](https://github.com/coconutcalendar/coconut-open-api-js/commit/4f7ca7d393)
- Adds time slots resource documentation [`80ec0d52ed`](https://github.com/coconutcalendar/coconut-open-api-js/commit/80ec0d52ed)
- Adds settings resource documentation [`6c37e5751e`](https://github.com/coconutcalendar/coconut-open-api-js/commit/6c37e5751e)
- Adds question resource documentation [`9defa80d41`](https://github.com/coconutcalendar/coconut-open-api-js/commit/9defa80d41)
- Adds service resource documentation [`9aafb048ef`](https://github.com/coconutcalendar/coconut-open-api-js/commit/9aafb048ef)
- Adds location resource documentation [`d24e1ac152`](https://github.com/coconutcalendar/coconut-open-api-js/commit/d24e1ac152)
- Exports constants [`ff77db1be9`](https://github.com/coconutcalendar/coconut-open-api-js/commit/ff77db1be9)

### Fixed
- Fixes improperly named section [`073970f67a`](https://github.com/coconutcalendar/coconut-open-api-js/commit/073970f67a)

## [0.2.1] - 2018-12-03

### Added
- Adds invitable filter to location and service resources [`8e7de92e15`](https://github.com/coconutcalendar/coconut-open-api-js/commit/8e7de92e15)

## [0.2.0] - 2018-11-30

### Added
- Adds install instructions, changelog link and testing instructions to readme [`3cb6230fed`](https://github.com/coconutcalendar/coconut-open-api-js/commit/3cb6230fed)
- Adds npm badges [`5225b982b4`](https://github.com/coconutcalendar/coconut-open-api-js/commit/5225b982b4)

### Changed
- Converts filter output to match expected query string for users [`3bcc9a06b2`](https://github.com/coconutcalendar/coconut-open-api-js/commit/3bcc9a06b2)
- Converts filter output to match expected query string for services [`26a3bb4cf8`](https://github.com/coconutcalendar/coconut-open-api-js/commit/26a3bb4cf8)
- Converts filter output to match expected query string for questions [`9d975f49e3`](https://github.com/coconutcalendar/coconut-open-api-js/commit/9d975f49e3)
- Converts filter output to match expected query string for locations resource [`839d9dd1bf`](https://github.com/coconutcalendar/coconut-open-api-js/commit/839d9dd1bf)

## 0.1.0 - 2018-11-19

### Added
- Adds update endpoint to wait list resource [`ad51ef4918`](https://github.com/coconutcalendar/coconut-open-api-js/commit/ad51ef4918)
- Handles optional information when creating wait list request [`1392548c6b`](https://github.com/coconutcalendar/coconut-open-api-js/commit/1392548c6b)
- Adds create wait list endpoint [`f5c8206f1c`](https://github.com/coconutcalendar/coconut-open-api-js/commit/f5c8206f1c)
- Adds preferences and additional notes setters [`22d24cede0`](https://github.com/coconutcalendar/coconut-open-api-js/commit/22d24cede0)
- Adds missing mocked out tests [`cc977a9f68`](https://github.com/coconutcalendar/coconut-open-api-js/commit/cc977a9f68)
- Adds extra mocked up tests for better coverage [`5588aa7132`](https://github.com/coconutcalendar/coconut-open-api-js/commit/5588aa7132)
- Implements retrieve wait list request endpoint for resource [`563b6be1ae`](https://github.com/coconutcalendar/coconut-open-api-js/commit/563b6be1ae)
- Adds removal endpoint for wait list resource [`87fe76bc97`](https://github.com/coconutcalendar/coconut-open-api-js/commit/87fe76bc97)
- Mocks out tests for action based methods [`d926578ca3`](https://github.com/coconutcalendar/coconut-open-api-js/commit/d926578ca3)
- Adds url parameter setters [`7310df4243`](https://github.com/coconutcalendar/coconut-open-api-js/commit/7310df4243)
- Adds location, service and user filter to wait list resource [`93401ed576`](https://github.com/coconutcalendar/coconut-open-api-js/commit/93401ed576)
- Adds mocked out wait list resource and interface [`285e39d73b`](https://github.com/coconutcalendar/coconut-open-api-js/commit/285e39d73b)
- Implements book endpoint with associated tests [`09439391aa`](https://github.com/coconutcalendar/coconut-open-api-js/commit/09439391aa)
- Implements retrieve appointment method [`2337c8e33a`](https://github.com/coconutcalendar/coconut-open-api-js/commit/2337c8e33a)
- Implements cancel method [`998fd3e898`](https://github.com/coconutcalendar/coconut-open-api-js/commit/998fd3e898)
- Implements initial version of appointment resource [`630c5b7324`](https://github.com/coconutcalendar/coconut-open-api-js/commit/630c5b7324)
- Adds stubbed out appointment resource and interfaces [`d74b703558`](https://github.com/coconutcalendar/coconut-open-api-js/commit/d74b703558)
- Implements remaining setters for attendee model [`a6ca7e5b00`](https://github.com/coconutcalendar/coconut-open-api-js/commit/a6ca7e5b00)
- Adds messagable attribute setter [`7c84776bfd`](https://github.com/coconutcalendar/coconut-open-api-js/commit/7c84776bfd)
- Implements location detail parameters [`c0bf907ac0`](https://github.com/coconutcalendar/coconut-open-api-js/commit/c0bf907ac0)
- Adds answers attribute setter [`5102744265`](https://github.com/coconutcalendar/coconut-open-api-js/commit/5102744265)
- Adds base model for attributes getter [`b7320a2d28`](https://github.com/coconutcalendar/coconut-open-api-js/commit/b7320a2d28)
- Adds missing answers parameter. Reorders parameters [`ab22acab62`](https://github.com/coconutcalendar/coconut-open-api-js/commit/ab22acab62)
- Adds pre-planned interfaces and type definitions [`551ce0f421`](https://github.com/coconutcalendar/coconut-open-api-js/commit/551ce0f421)
- Adds test to increase coverage [`12da14decb`](https://github.com/coconutcalendar/coconut-open-api-js/commit/12da14decb)
- Adds preference model [`4df6815cab`](https://github.com/coconutcalendar/coconut-open-api-js/commit/4df6815cab)
- Adds answer model [`e12b2e9983`](https://github.com/coconutcalendar/coconut-open-api-js/commit/e12b2e9983)
- Adds slot accessor and test [`a8f1e81f38`](https://github.com/coconutcalendar/coconut-open-api-js/commit/a8f1e81f38)
- Adds time slot resource and tests [`39152d7ca1`](https://github.com/coconutcalendar/coconut-open-api-js/commit/39152d7ca1)
- Adds location accessor to main class [`6a9c91ffa4`](https://github.com/coconutcalendar/coconut-open-api-js/commit/6a9c91ffa4)
- Adds location resource and associated tests [`a058ed8140`](https://github.com/coconutcalendar/coconut-open-api-js/commit/a058ed8140)
- Adds service resource with associated tests [`a95fdf17b7`](https://github.com/coconutcalendar/coconut-open-api-js/commit/a95fdf17b7)
- Adds setting resource with accompanying tests [`682f1bbe15`](https://github.com/coconutcalendar/coconut-open-api-js/commit/682f1bbe15)
- Adds on and take as options for a resource [`c8f7ba0b53`](https://github.com/coconutcalendar/coconut-open-api-js/commit/c8f7ba0b53)
- Adds conduct and template files [`f9b700b10d`](https://github.com/coconutcalendar/coconut-open-api-js/commit/f9b700b10d)
- Adds start of new badges. Adds license [`71c3373fd5`](https://github.com/coconutcalendar/coconut-open-api-js/commit/71c3373fd5)
- Adds jest to global install [`4d3ab8118e`](https://github.com/coconutcalendar/coconut-open-api-js/commit/4d3ab8118e)
- Adds codecov instructions for travis-ci [`4009fa9342`](https://github.com/coconutcalendar/coconut-open-api-js/commit/4009fa9342)
- Adds missing tests for coverage [`4e90a5aa35`](https://github.com/coconutcalendar/coconut-open-api-js/commit/4e90a5aa35)
- Adds test for property instance [`5e1468c284`](https://github.com/coconutcalendar/coconut-open-api-js/commit/5e1468c284)
- Adds initial travis config [`5803eda821`](https://github.com/coconutcalendar/coconut-open-api-js/commit/5803eda821)
- Adds open api options and new tests for base class and client [`6a78c56712`](https://github.com/coconutcalendar/coconut-open-api-js/commit/6a78c56712)
- Adds initial tests and mock for user resource [`3e0c42f7eb`](https://github.com/coconutcalendar/coconut-open-api-js/commit/3e0c42f7eb)
- Sets root dir for jest. Adds test watch command [`0c77118526`](https://github.com/coconutcalendar/coconut-open-api-js/commit/0c77118526)
- Adds initial implementation of user resource with types [`2889f19919`](https://github.com/coconutcalendar/coconut-open-api-js/commit/2889f19919)
- Adds hook scripts [`c9e0706b71`](https://github.com/coconutcalendar/coconut-open-api-js/commit/c9e0706b71)
- Adds jest and config files [`ccc1f47edb`](https://github.com/coconutcalendar/coconut-open-api-js/commit/ccc1f47edb)
- Adds npmignore [`a7b3e09f1b`](https://github.com/coconutcalendar/coconut-open-api-js/commit/a7b3e09f1b)
- Adds prettier and new npm scripts [`4c1d651e2d`](https://github.com/coconutcalendar/coconut-open-api-js/commit/4c1d651e2d)
- Adds typescript and basic npm scripts [`eea9c494a4`](https://github.com/coconutcalendar/coconut-open-api-js/commit/eea9c494a4)
- Initial commit [`47f8644eeb`](https://github.com/coconutcalendar/coconut-open-api-js/commit/47f8644eeb)

### Changed
- Moves interfaces to correct classes for better declaration of distributed types [`a532c16fa8`](https://github.com/coconutcalendar/coconut-open-api-js/commit/a532c16fa8)
- Updates package name [`68d602629a`](https://github.com/coconutcalendar/coconut-open-api-js/commit/68d602629a)
- Runs prettier formatter [`a8ce9c6238`](https://github.com/coconutcalendar/coconut-open-api-js/commit/a8ce9c6238)
- Converts to template strings [`7bdd3d2967`](https://github.com/coconutcalendar/coconut-open-api-js/commit/7bdd3d2967)
- Changes test method to matching method for other spots [`408c4aee7a`](https://github.com/coconutcalendar/coconut-open-api-js/commit/408c4aee7a)
- Moves relationships away from filter setup to relationship setup. Adds attendee relationship setter [`bfe94df142`](https://github.com/coconutcalendar/coconut-open-api-js/commit/bfe94df142)
- Extracts more code and renames methods [`67a8edf917`](https://github.com/coconutcalendar/coconut-open-api-js/commit/67a8edf917)
- Converts multiple properties into filter and relationships properties [`0d9f09a92f`](https://github.com/coconutcalendar/coconut-open-api-js/commit/0d9f09a92f)
- Extracts small part of object to model method [`d9ab8f914b`](https://github.com/coconutcalendar/coconut-open-api-js/commit/d9ab8f914b)
- Brings coverage back up to 100 percent [`ae0a226fa6`](https://github.com/coconutcalendar/coconut-open-api-js/commit/ae0a226fa6)
- Refactors tests that were checking unnecessary attributes [`14802ffb8e`](https://github.com/coconutcalendar/coconut-open-api-js/commit/14802ffb8e)
- Converts interface names [`796b66ee56`](https://github.com/coconutcalendar/coconut-open-api-js/commit/796b66ee56)
- Adjusts answer tests [`59a907da2b`](https://github.com/coconutcalendar/coconut-open-api-js/commit/59a907da2b)
- Updates model with interfaces and changes to attribute based setup for better typing [`11ae9de5c3`](https://github.com/coconutcalendar/coconut-open-api-js/commit/11ae9de5c3)
- Switches generic interface to proper one [`eb122b86b7`](https://github.com/coconutcalendar/coconut-open-api-js/commit/eb122b86b7)
- Adds question resource [`25acaa8d05`](https://github.com/coconutcalendar/coconut-open-api-js/commit/25acaa8d05)
- Adds service getter [`7c310ed144`](https://github.com/coconutcalendar/coconut-open-api-js/commit/7c310ed144)
- Renames interface to more suitable name [`88d5a9018a`](https://github.com/coconutcalendar/coconut-open-api-js/commit/88d5a9018a)
- Moves methods to new interface to account for none-listable resources [`cc99c49c4b`](https://github.com/coconutcalendar/coconut-open-api-js/commit/cc99c49c4b)
- Cleans code style [`f6078c5d95`](https://github.com/coconutcalendar/coconut-open-api-js/commit/f6078c5d95)
- Changes to before install in hopes of not missing packages [`00ed8e4474`](https://github.com/coconutcalendar/coconut-open-api-js/commit/00ed8e4474)
- Updates travis config [`2f4902b540`](https://github.com/coconutcalendar/coconut-open-api-js/commit/2f4902b540)
- Excludes mocks and test files from distributed files [`57e474f5ef`](https://github.com/coconutcalendar/coconut-open-api-js/commit/57e474f5ef)
- Finishes unit tests for user resource [`b10d60fe27`](https://github.com/coconutcalendar/coconut-open-api-js/commit/b10d60fe27)
- Cleans up code formatting [`72f0af8fe2`](https://github.com/coconutcalendar/coconut-open-api-js/commit/72f0af8fe2)
- Changes variable name to make more sense [`45e4befbf6`](https://github.com/coconutcalendar/coconut-open-api-js/commit/45e4befbf6)
- Converts parameter name to make more since since its a single value [`75a78ca566`](https://github.com/coconutcalendar/coconut-open-api-js/commit/75a78ca566)
- Converts get method to use async await [`ad9529e560`](https://github.com/coconutcalendar/coconut-open-api-js/commit/ad9529e560)
- Switches to rollup over straight tsc [`a95a841598`](https://github.com/coconutcalendar/coconut-open-api-js/commit/a95a841598)
- Formats code using prettier [`e507d54609`](https://github.com/coconutcalendar/coconut-open-api-js/commit/e507d54609)
- Adjusts main path. Adds types path [`e6ae35d62d`](https://github.com/coconutcalendar/coconut-open-api-js/commit/e6ae35d62d)
- Updates ignored folders [`883c5202da`](https://github.com/coconutcalendar/coconut-open-api-js/commit/883c5202da)

### Removed
- Removes comments from output [`0ffe2b2570`](https://github.com/coconutcalendar/coconut-open-api-js/commit/0ffe2b2570)
- Removes es build [`1aec1d3132`](https://github.com/coconutcalendar/coconut-open-api-js/commit/1aec1d3132)
- Removes mocked call chain [`3c253abd0a`](https://github.com/coconutcalendar/coconut-open-api-js/commit/3c253abd0a)
- Removes ill-thought out version option [`d159644516`](https://github.com/coconutcalendar/coconut-open-api-js/commit/d159644516)

[Unreleased]: https://github.com/coconutcalendar/coconut-open-api-js/compare/v0.5.4...HEAD
[0.5.4]: https://github.com/coconutcalendar/coconut-open-api-js/compare/v0.5.3...v0.5.4
[0.5.3]: https://github.com/coconutcalendar/coconut-open-api-js/compare/v0.5.2...v0.5.3
[0.5.2]: https://github.com/coconutcalendar/coconut-open-api-js/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/coconutcalendar/coconut-open-api-js/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/coconutcalendar/coconut-open-api-js/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/coconutcalendar/coconut-open-api-js/compare/v0.3.5...v0.4.0
[0.3.5]: https://github.com/coconutcalendar/coconut-open-api-js/compare/v0.3.4...v0.3.5
[0.3.4]: https://github.com/coconutcalendar/coconut-open-api-js/compare/v0.3.3...v0.3.4
[0.3.3]: https://github.com/coconutcalendar/coconut-open-api-js/compare/v0.3.2...v0.3.3
[0.3.2]: https://github.com/coconutcalendar/coconut-open-api-js/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/coconutcalendar/coconut-open-api-js/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/coconutcalendar/coconut-open-api-js/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/coconutcalendar/coconut-open-api-js/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/coconutcalendar/coconut-open-api-js/compare/v0.1.0...v0.2.0
