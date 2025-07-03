import dayjs from 'dayjs';

import { getTimeFormat } from './dateFormatManager';
import { isDateValid } from './isDateValid';
import { isDST } from './isDST';

/**
 * For a given date|string, return a string with the indicated format.
 *
 * @param {string | Date} dateValue - Value to format
 * @param {template} template - Time format based on [day.js format](https://day.js.org/docs/en/display/format)
 * @returns {string} Returns the time as an string with the given format.
 * @example
 *
 * formatTime('2021-02-26T22:42:16.652Z', 'HH:mm:ss')
 * // => '22:42:16'
 */

export const formatTime = (
  dateValue: string | Date,
  template: string = getTimeFormat(),
): string => {
  if (!isDateValid(dateValue)) return '';

  if (isDST(dateValue)) {
    return dayjs(dateValue).format(template);
  }

  return dayjs(dateValue).add(1, 'hour').format(template);
};
