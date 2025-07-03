import dayjs from 'dayjs';

import { getDateFormat } from './dateFormatManager';
import { isDateValid } from './isDateValid';

/**
 * For a given date|string, return a string with the indicated format.
 *
 * @param {string | Date} dateValue - Value to format
 * @param {template} template - Date format based on [day.js format](https://day.js.org/docs/en/display/format)
 * @returns {string} Returns the date as an string with the given format.
 * @example
 *
 * formatDate('2021-02-26T22:42:16.652Z', 'YYYY-MM-DD')
 * // => '2021-02-26'
 */

export const formatDate = (
  dateValue?: string | Date | null,
  template: string = getDateFormat(),
): string => (isDateValid(dateValue) ? dayjs(dateValue).format(template) : '');
