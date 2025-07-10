import { isString } from 'src/typeChecker/isString';

/**
 * Takes a cameCase `string` and returns its snake_case version.
 *
 * @param {string} str - string to format
 * @returns {string} string with lowercase format
 * @example
 *
 * camelToSnakeCase('loremIpsum')
 * // => 'lorem_ipsum'
 */

export const camelToSnakeCase = (str?: string): string => {
  if (!isString(str)) {
    return '';
  }
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
};
