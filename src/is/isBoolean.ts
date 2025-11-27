/**
 * Check if a value is a boolean
 * @param value - The value to check
 * @returns `true` if the value is a boolean, `false` otherwise
 *
 * @example
 * ```ts
 * isBoolean(true); // true
 * isBoolean('true'); // false
 * isBoolean(1); // false
 */
export const isBoolean = (value: unknown): value is boolean =>
  typeof value === 'boolean';
