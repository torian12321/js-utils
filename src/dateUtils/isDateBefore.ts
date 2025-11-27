/**
 * Checks if `date` is before `refDate`.
 *
 * @param {string | Date} date - The date to check.
 * @param {string | Date} refDate - The reference date to compare against.
 * @returns {boolean} Returns `true` if `date` is before `refDate`, otherwise `false`.
 *
 * @example
 *
 * ```ts
 * isDateBefore(new Date('2010'), new Date('2000'));
 * // => false
 * ```
 *
 * ```ts
 * isDateBefore(new Date('2000'), new Date('2010'));
 * // => true
 * ```
 */

export const isDateBefore = (
  date: string | Date,
  refDate: string | Date,
): boolean => {
  const dateObj = new Date(date);
  const refDateObj = new Date(refDate);

  return dateObj < refDateObj;
};
