/**
 * Checks if the provided value is of type number.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if number, otherwise `false`.
 * @example
 *
 * isNumber(123456)
 * // => true
 *
 * isNumber('123456')
 * // => false
 *
 * isNumber('0')
 * // => false
 */

export const isNumber = (value: unknown): value is number =>
  typeof value === 'number' && !isNaN(value);
