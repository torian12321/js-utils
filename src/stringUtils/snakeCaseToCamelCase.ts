import { isString } from 'src/typeChecker/isString';

/**
 * Takes a snake_case `string` and returns its version with camelCase.
 *
 * @param {string} str - string to format
 * @returns {string} string with correct format
 * @example
 *
 * snakeCaseToCamelCase('lorem_ipsum_dolor_sit_amet')
 * // => 'loremIpsumDolorSitAmet'
 */

export const snakeCaseToCamelCase = (str?: string): string => {
  if (!isString(str)) {
    return '';
  }

  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};
