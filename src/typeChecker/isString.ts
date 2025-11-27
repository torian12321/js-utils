/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 *
 * @example
 * ```ts
 * isString('abc');
 * // => true
 * ```
 * ```ts
 * isString(1);
 * // => false
 * ```
 */

export const isString = (value: unknown): value is string =>
  typeof value === 'string';
