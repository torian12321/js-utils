/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, otherwise `false`.
 *
 * @example
 * ```ts
 * isNumber(1);
 * // => true
 * ```
 * ```ts
 * isNumber(0);
 * // => true
 * ```
 * ```ts
 * isNumber('abc');
 * // => false
 * ```
 */

export const isNumber = (value: unknown): value is number =>
  typeof value === 'number' && !Number.isNaN(value);
