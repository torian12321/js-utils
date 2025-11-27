/**
 * Finds all elements in arr1 that are not present in arr2.
 * @param arr1 - First array of strings.
 * @param arr2 - Second array of strings to compare against.
 * @param arrX - X array of strings to compare against.
 * @returns An array of extra elements from arr1 that are not in arr2. Returns an empty array if there are none.
 *
 * @example
 * ```ts
 * findExtraElements(['a', 'b', 'c', 'd'], ['a', 'b']);
 * // => ['c', 'd']
 * ```
 */

export const findExtraElements = (
  arr1: string[] = [],
  ...arrays: string[][]
): string[] => {
  const combinedArray = arrays.flat();
  // Return the array of extra elements
  return arr1.filter(item => !combinedArray.includes(item));
};
