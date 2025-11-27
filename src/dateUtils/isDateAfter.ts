/**
 * Checks if `date` is after `refDate`.
 *
 * @param {string | Date} date - The date to check.
 * @param {string | Date} refDate - The reference date to compare against.
 * @returns {boolean} Returns `true` if `date` is after `refDate`, otherwise `false`.
 *
 * @example
 *
 * ```ts
 * isDateAfter(new Date('2010'), new Date('2000'));
 * // => true
 * ```
 *
 * ```ts
 * isDateAfter(new Date('2000'), new Date('2010'));
 * // => false
 * ```
 */

export const isDateAfter = (
  date: string | Date,
  refDate: string | Date,
): boolean => {
  const dateObj = new Date(date);
  const refDateObj = new Date(refDate);

  return dateObj > refDateObj;
};
