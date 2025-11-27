import { isString } from 'src/typeChecker';

/**
 * Clean `obj` by removing empty nodes, nodes
 * with null/undefined or empty string values.
 *
 * @param {object} obj - Object to clean
 * @returns {object} New object with empty nodes removed
 *
 * @example
 * ```ts
 * cleanObject({ firstName: 'John', age: undefined });
 * // => { firstName: 'John' }
 * ```
 */

export const cleanObject = (obj: object): object =>
  Object.fromEntries(
    Object.entries(obj).filter(
      ([_, v]) =>
        // Remove null values
        v != null &&
        // remove empty string values
        isString(v) &&
        v.replace(/ /g, '').length,
    ),
  );
