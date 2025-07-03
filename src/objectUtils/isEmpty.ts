/**
 * Checks if `object` has content
 * Usefull check for when the user is manually typing a date
 *
 * @param {Object} object The value to check.
 * @returns {boolean} Returns `true` if `object` has content, else `false`.
 * @example
 *
 * isEmpty({})
 * // => true
 *
 * isEmpty({ user: 'Jack'})
 * // => false
 */

export const isEmpty = (obj: object): boolean => {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
};
