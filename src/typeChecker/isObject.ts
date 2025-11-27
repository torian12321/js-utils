import { isDate } from './isDate';
import { isError } from './isError';

/**
 * Checks if `value` is objects
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 *
 * @example
 * ```ts
 * isObject({});
 * // => true
 * ```
 * ```ts
 * isObject(null);
 * // => false
 * ```
 */

export const isObject = (value: unknown): value is object =>
  typeof value === 'object' &&
  !Array.isArray(value) &&
  !isDate(value) &&
  !isError(value) &&
  value !== null;
