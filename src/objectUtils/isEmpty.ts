/**
 * Checks if `obj` has content
 * Usefull check for when the user is manually typing a date
 *
 * @param {object} obj The value to check.
 * @returns {boolean} Returns `true` if `obj` has content, else `false`.
 *
 * @example
 * ```ts
 * isEmpty({});
 * // => true
 * ```
 *
 * ```ts
 * isEmpty({ user: 'Jack' });
 * // => false
 * ```
 */

export const isEmpty = (obj: object): boolean => {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return true;
};
