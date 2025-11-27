/**
 * Checks if the provided date is valid.
 * This function can handle various input types including string, number, Date object, or null/undefined.
 *
 * Usefull check for when the user is manually typing a date
 *
 * @param {string | number | Date | null | undefined} date - The date to validate.
 * @returns {boolean} Returns `true` if the date is valid, otherwise `false`.
 *
 * @example
 *
 * ```ts
 * isDateValid(new Date());
 * // => true
 * ```
 *
 * ```ts
 * isDateValid('today');
 * // => false
 * ```
 */

export const isDateValid = (
  date?: string | number | Date | null | undefined,
): boolean => {
  if (!date) return false;

  const parsedDate = new Date(date);
  return !isNaN(parsedDate.getTime());
};
