import { isString } from 'src/typeChecker/isString';

/**
 * Takes a snake_case `string` and returns its version with spaces.
 *
 * @param {string} str - string to format
 * @returns {string} string with correct format
 * @example
 *
 * snakeCaseToSpace('Lorem_Ipsum_Dolor_Sit_Amet')
 * // => 'Lorem Ipsum Dolor Sit Amet'
 */

export const snakeCaseToSpace = (str?: string): string => {
  if (!isString(str)) {
    return '';
  }

  return str.replace(/_/g, ' ');
};
