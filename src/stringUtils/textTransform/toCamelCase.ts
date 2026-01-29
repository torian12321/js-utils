import { isString } from 'src/typeChecker';

/**
 * Takes a string and returns its snake_case version.
 *
 * @param {string} str - The string to convert
 * @returns {string} The snake_case version of the string
 *
 * @example
 * ```ts
 * // From snake_case
 * toCamelCase('lorem_ipsum');
 * // => 'loremIpsum'
 * ```
 *
 * ```ts
 * // From kebab-case
 * toCamelCase('lorem-ipsum-dolor-sit-amet');
 * // => 'loremIpsumDolorSitAmet'
 * ```
 *
 * ```ts
 * // From pascalCase
 * toCamelCase('LoremIpsumDolorSitAmet');
 * // => 'loremIpsumDolorSitAmet'
 * ```
 *
 * ```ts
 * // From spaceCase
 * toCamelCase('lorem ipsum dolor sit amet');
 * // => 'loremIpsumDolorSitAmet'
 * ```
 *
 * ```ts
 * // From all uppercase letters
 * toCamelCase('LOREM IPSUM DOLOR SIT AMET');
 * // => 'loremIpsumDolorSitAmet'
 * ```
 *
 * ```ts
 * // From combined case
 * toCamelCase('Lorem-Ipsum Dolor SitAmet');
 * // => 'loremIpsumDolorSitAmet'
 * ```
 */

export const toCamelCase = (str?: string): string => {
  if (!isString(str)) {
    return '';
  }

  const trimmed = str.trim();

  // Check if entire string is uppercase (ignoring spaces and delimiters)
  const isAllUppercase = /^[A-Z\s_-]+$/.test(trimmed);

  // Normalize: replace delimiters with spaces, split on case boundaries
  const normalized = trimmed
    // Replace hyphens and underscores with spaces
    .replace(/[-_]/g, ' ')
    // Add space between lowercase and uppercase (camelCase)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // Add space before last uppercase in sequence followed by lowercase (e.g., ABCDef → ABC Def)
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    // Replace multiple spaces with single space
    .replace(/\s+/g, ' ')
    .trim();

  const words = normalized.split(' ');

  return words
    .map((word, index) => {
      if (index === 0) {
        // First word: lowercase entirely
        return word.toLowerCase();
      }
      // Preserve all-uppercase words (2+ letters) if string is not entirely uppercase
      if (!isAllUppercase && word.length >= 2 && /^[A-Z]+$/.test(word)) {
        return word;
      }
      // Other words: capitalize first letter, lowercase rest
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
};
