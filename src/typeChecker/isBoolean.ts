/**
 * Checks if the provided value is of type boolean.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if boolean, otherwise `false`.
 *
 * @example
 * ```ts
 * isBoolean(true);
 * // => true
 * ```
 * ```ts
 * isBoolean(false);
 * // => true
 * ```
 * ```ts
 * isBoolean('true');
 * // => false
 * ```
 */

export const isBoolean = (value: unknown): value is boolean =>
  typeof value === 'boolean';
