import dayjs from 'dayjs';

import { getClientTimezone, getDateFormat } from './dateFormatManager';
import type { FormatArgs } from './format.types';
import { getLocalTimezone } from './getLocalTimezone';
import { isDateValid } from './isDateValid';

/**
 * For a given date|string, return a string with the indicated format.
 *
 * @param {string | Date} dateValue - Value to format
 * @param {Object} [options] - Configuration object
 * @param {string} [options.template] - Date format based on [day.js format](https://day.js.org/docs/en/display/format)
 * @param {boolean} [options.userLocalTimezone] - If true, the date will be formatted using the user's local timezone
 * @returns {string} Returns the date as an string with the given format.
 *
 * @example
 * ```ts
 * formatDate('2021-02-26T22:42:16.652Z');
 * // => '26/02/2021'
 * ```
 *
 * ```ts
 * formatDate('2021-02-26T22:42:16.652Z', { template: 'YYYY-MM-DD' });
 * // => '2021-02-26'
 * ```
 *
 * ```ts
 * formatDate('2021-02-26T22:42:16.652Z', { template: 'YYYY-MM-DD', userLocalTimezone: true });
 * // => '2021-02-26' (formatted in local timezone)
 * ```
 */

export const formatDate = (
  dateValue?: string | Date | null,
  {
    timezone = getClientTimezone(),
    template = getDateFormat(),
    userLocalTimezone = false,
  }: FormatArgs = {},
): string => {
  if (!isDateValid(dateValue)) return '';

  if (userLocalTimezone) {
    const localDate = getLocalTimezone(dateValue);
    return localDate.format(template);
  }

  return dayjs(dateValue).tz(timezone).format(template);
};
