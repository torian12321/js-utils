import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Get the local timezone for a given date.
 *
 * @param {string | Date} dateValue - Date to get the local timezone for
 * @returns {Dayjs} Returns the date as a Dayjs object.
 *
 * @example
 * ```ts
 * getLocalTimezone('2021-02-26T22:42:16.652Z');
 * // => Dayjs object
 * ```
 */
export const getLocalTimezone = (
  dateValue?: string | Date | number | null,
): Dayjs => dayjs.utc(dateValue).tz(dayjs.tz.guess());
