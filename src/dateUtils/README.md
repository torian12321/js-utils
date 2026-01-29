# Date Utilities

Utilities for date formatting, validation, and manipulation with timezone support.

## Configuration

Before using the formatters, configure your timezone and preferred formats:

```ts
import { configureDateFormats } from '@torian12321/js-utils/dateUtils';

configureDateFormats({
  clientTimezone: 'Europe/Madrid',
  dateFormat: 'DD/MM/YYYY',
  timeFormat: 'HH:mm',
  dateTimeFormat: 'DD/MM/YYYY HH:mm',
});
```

## Formatting

```ts
import {
  formatDate,
  formatTime,
  formatDateTime,
} from '@torian12321/js-utils/dateUtils';

formatDate('2024-03-15T14:30:00Z'); // '15/03/2024'
formatTime('2024-03-15T14:30:00Z'); // '14:30'
formatDateTime('2024-03-15T14:30:00Z'); // '15/03/2024 14:30'
```

<p align="center">
  <img src="../../docs/assets/map-dateUtils.png" alt='monorepo diagram' width="800" />
</p>

Formatter functions take a UTC date string (or Date) and display the date/time based on the **client timezone** configured via `configureDateFormats()`, not the user's local timezone. This ensures consistent formatting across all users regardless of their location.

To format dates using the **user's local timezone** instead, use the `userLocalTimezone` option:

```ts
// Uses user's browser/system timezone instead of client timezone
formatDateTime('2024-03-15T14:30:00Z', { userLocalTimezone: true });
```
