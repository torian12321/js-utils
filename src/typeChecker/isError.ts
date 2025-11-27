/**
 * Checks if `value` is Error
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an Error, else `false`.
 *
 * @example
 * ```ts
 * isError(new Error('foo'));
 * // => true
 * ```
 * ```ts
 * isError(null);
 * // => false
 * ```
 */

export const isError = (value: unknown): value is Error =>
  value instanceof Error;
