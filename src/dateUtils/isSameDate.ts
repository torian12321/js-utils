import dayjs from 'dayjs';

/**
 * Checks if `date1` and `date2` are the same.
 *
 * @param {string | Date} date1 - first date to compare.
 * @param {string | Date} date2 - second date to compare.
 * @returns {boolean} Returns `true` if both dates are the same.
 *
 * @example
 *
 * ```ts
 * isSameDate('2022-03-28', '2022-03-28');
 * // => true
 * ```
 *
 * ```ts
 * isSameDate(new Date('2022-03-28'), new Date('2022-03-28'));
 * // => true
 * ```
 */

export const isSameDate = (
  date1: string | Date,
  date2: string | Date,
): boolean => dayjs(date1).isSame(dayjs(date2));
