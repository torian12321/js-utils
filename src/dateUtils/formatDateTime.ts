import dayjs from 'dayjs';

import { getDateTimeFormat } from './dateFormatManager';
import type { FormatArgs } from './format.types';
import { getLocalTimezone } from './getLocalTimezone';
import { isDateValid } from './isDateValid';
import { isDST } from './isDST';

/**
 * For a given date|string, return a string with the indicated format.
 *
 * @param {string | Date} dateValue - Value to format
 * @param {Object} [options] - Configuration object
 * @param {string} [options.template] - DateTime format based on [day.js format](https://day.js.org/docs/en/display/format)
 * @param {boolean} [options.userLocalTimezone] - If true, the dateTime will be formatted using the user's local timezone
 * @returns {string} Returns the date as an string with the given format.
 *
 * @example
 * ```ts
 * formatDateTime('2021-02-26T22:42:16.652Z');
 * // => '26/02/2021 22:42'
 * ```
 *
 * ```ts
 * formatDateTime('2021-02-26T22:42:16.652Z', { template: 'YYYY-MM-DD HH:mm:ss' });
 * // => '2021-02-26 22:42:16'
 * ```
 *
 * ```ts
 * formatDateTime('2021-02-26T22:42:16.652Z', { template: 'YYYY-MM-DD HH:mm:ss', userLocalTimezone: true });
 * // => '2021-02-26 22:42:16' (formatted in local timezone)
 * ```
 */

export const formatDateTime = (
  dateValue: string | Date,
  {
    template = getDateTimeFormat(),
    userLocalTimezone = false,
  }: FormatArgs = {},
): string => {
  if (!isDateValid(dateValue)) return '';

  if (userLocalTimezone) {
    const localDate = getLocalTimezone(dateValue);
    return localDate.format(template);
  }

  if (isDST(dateValue)) {
    return dayjs(dateValue).format(template);
  }

  return dayjs(dateValue).add(1, 'hour').format(template);
};
