/**
 * Checks if the provided value is of type boolean.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if boolean, otherwise `false`.
 * @example
 *
 * isBoolean(true)
 * // => true
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean('true')
 * // => false
 */

export const isBoolean = (val: unknown): val is boolean =>
  typeof val === 'boolean';
