/**
 * Checks if a value is a string.
 * @param value - The value to check.
 * @returns `true` if the value is a string, `false` otherwise.
 *
 * @example
 * ```ts
 * isString('hello'); // true
 * isString(123); // false
 * isString(true); // false
 * isString(null); // false
 */
export const isString = (value: unknown): value is string =>
  typeof value === 'string';
