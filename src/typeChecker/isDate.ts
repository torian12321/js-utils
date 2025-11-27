/**
 * Checks if `value` is Date
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a Date, else `false`.
 *
 * @example
 * ```ts
 * isDate(new Date());
 * // => true
 * ```
 * ```ts
 * isDate('11-22');
 * // => false
 * ```
 */

export const isDate = (value: unknown): value is Date =>
  value instanceof Date && !isNaN(value.valueOf());
