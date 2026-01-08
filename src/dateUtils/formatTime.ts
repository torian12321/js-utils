import dayjs from 'dayjs';

import { getClientTimezone, getTimeFormat } from './dateFormatManager';
import type { FormatArgs } from './format.types';
import { getLocalTimezone } from './getLocalTimezone';
import { isDateValid } from './isDateValid';

/**
 * For a given date|string, return a string with the indicated format.
 *
 * @param {string | Date} dateValue - Value to format
 * @param {Object} [options] - Configuration object
 * @param {string} [options.template] - Time format based on [day.js format](https://day.js.org/docs/en/display/format)
 * @param {boolean} [options.userLocalTimezone] - If true, the time will be formatted using the user's local timezone
 * @returns {string} Returns the time as an string with the given format.
 *
 * @example
 * ```ts
 * formatTime('2021-02-26T22:42:16.652Z');
 * // => '22:42'
 * ```
 *
 * ```ts
 * formatTime('2021-02-26T22:42:16.652Z', { template: 'HH:mm:ss' });
 * // => '22:42:16'
 * ```
 *
 * ```ts
 * formatTime('2021-02-26T22:42:16.652Z', { template: 'HH:mm:ss', userLocalTimezone: true });
 * // => '22:42:16' (formatted in local timezone)
 * ```
 */

export const formatTime = (
  dateValue?: string | Date | null,
  {
    timezone = getClientTimezone(),
    template = getTimeFormat(),
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
