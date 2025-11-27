import { isObject } from 'src/typeChecker';

type AnyObject = Record<string, unknown>;

/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * @param {object | undefined | null} obj1 - The first object to compare.
 * @param {object | undefined | null} obj2 - The second object to compare.
 * @returns {boolean} Returns `true` if the objects are equivalent, otherwise `false`.
 *
 * @example
 * ```ts
 * isEqual({ a: 1 }, { a: 1 });
 * // => true
 * ```
 *
 * ```ts
 * isEqual({ a: 1 }, { a: 2 });
 * // => false
 * ```
 *
 * ```ts
 * isEqual({ a: { b: 2 }}, { a: { b: 2 }});
 * // => true
 * ```
 */

export const isEqual = (
  obj1: AnyObject | undefined | null,
  obj2: AnyObject | undefined | null,
): boolean => {
  // If both are primitive types (including null and undefined)
  if (obj1 === obj2) return true;

  // If either is null or not an object, they can't be equal at this point
  if (!isObject(obj1) || !isObject(obj2)) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key)) return false;

    if (isObject(obj1[key]) && isObject(obj2[key])) {
      // Recursive call for nested objects
      if (!isEqual(obj1[key] as AnyObject, obj2[key] as AnyObject))
        return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};
