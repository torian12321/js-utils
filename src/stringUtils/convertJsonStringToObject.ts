/**
 * Tansform string with JSON object on it into an object.
 * with null/undefined or empty string values.
 *
 * @param {string} jsonString - Object to clean
 * @returns {object} New object with empty nodes removed
 *
 * @example
 * ```ts
 * convertJsonStringToObject('{"result":true, "count":42}');
 * // => { count: 42, result: true }
 * ```
 */

export const convertJsonStringToObject = (
  jsonString: string,
): string | null => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return null;
  }
};
