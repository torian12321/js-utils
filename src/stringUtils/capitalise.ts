import { isString } from 'src/typeChecker';

/**
 * Takes an `string` and returns it
 * with the first letter of each word capitalized.
 *
 * @param {string} str - string to format
 * @returns {string} string with capitalise format
 *
 * @example
 * ```ts
 * capitalise('lorem ipsum dolor sit amet');
 * // => 'Lorem Ipsum Dolor Sit Amet'
 * ```
 */

export const capitalise = (str?: string): string => {
  if (!isString(str)) {
    return '';
  }

  // If the string is empty or only contains whitespace, return it as is
  if (str.trim() === '') {
    return str;
  }

  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ');
};
