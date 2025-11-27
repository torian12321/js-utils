import { isString } from 'src/typeChecker';

import { capitalise } from './capitalise';

/**
 * Takes an `string` and returns it
 * with the letter of each word capitalised, the other letter are lowercased.
 *
 * @param {string} str - string to format
 * @returns {string} string with capitalise format
 *
 * @example
 * ```ts
 * capitaliseFirstLetter('LOREM IPSUM');
 * // => 'Lorem Ipsum'
 * ```
 */

export const capitaliseFirstLetter = (str?: string): string => {
  if (!isString(str)) {
    return '';
  }

  return capitalise(str.toLowerCase());
};
