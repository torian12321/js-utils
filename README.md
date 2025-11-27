<p align="center">
  <a href="https://github.com/torian12321/js-utils/actions/workflows/ci.yml"><img src="https://github.com/torian12321/js-utils/actions/workflows/CI.yml/badge.svg?branch=master" alt="build status"></a>
    <a href="https://github.com/torian12321/js-utils/releases/latest" title="Latest Release">
  <img alt="GitHub release" src="https://img.shields.io/github/v/release/torian12321/js-utils" />
  </a>
</p>

## @torian12321/js-utils

`@torian12321/js-utils` library provides a collection of generic, reusable functions to streamline development and enhance code consistency across TypeScript projects. It includes a variety of utility functions that can be employed in different scenarios to reduce redundancy and improve documentation.

# Usage

## Environment Setup

1. Generate a `.npmrc` file based on the provided `.npmrc.example`. [Details](./docs/NPMRC_TOKEN.md)

## Installation

```sh
npm install @torian12321/js-utils --save-dev
```

## Import example

```js
import { isDateValid } from '@torian12321/js-utils';

const isValid = isDateValid('2000');
```

```js
import { isDateValid } from '@torian12321/js-utils/date';

const isValid = isDateValid('2000');
```

## Configuration

The date formatting utilities can be configured globally:

```ts
import { configureDateFormats } from '@torian12321/js-utils/date';

configureDateFormats({
  dateFormat: 'YYYY-MM-DD', // Optional
  timeFormat: 'HH:mm', // Optional
  dateTimeFormat: 'YYYY-MM-DD HH:mm', // Optional
});
```

If not configured, the following defaults are used:

- Date format: 'MM/DD/YYYY'
- Time format: 'HH:mm'
- Date and time format: 'MM/DD/YYYY HH:mm'

## Documentation

- [Add new function](./docs/ADDING_NEW_FUNCTION.md)
- [Setup GitHub page](./docs/DOCUMENTATION.md)
