import { isString } from 'src/typeChecker';

/**
 * Takes a string and returns its space case version.
 *
 * @param {string} str - The string to convert
 * @returns {string} The space case version of the string
 *
 * @example
 * ```ts
 * // From camelCase
 * toSpaceCase('LoremIpsum');
 * // => 'Lorem Ipsum'
 *
 * toSpaceCase('LoremIpsumABC');
 * // => 'Lorem Ipsum ABC'
 * ```
 *
 * ```ts
 * // From kebab-case
 * toSpaceCase('lorem-ipsum-dolor-sit-amet');
 * // => 'Lorem Ipsum Dolor Sit Amet'
 * ```
 *
 * ```ts
 * // From pascalCase
 * toSpaceCase('LoremIpsumDolorSitAmet');
 * // => 'Lorem Ipsum Dolor Sit Amet'
 * ```
 *
 * ```ts
 * // From snake_case
 * toSpaceCase('lorem_ipsum_dolor_sit_amet');
 * // => 'lorem ipsum dolor sit amet'
 * ```
 *
 * ```ts
 * // From spaceCase
 * toSpaceCase('lorem ipsum dolor sit amet');
 * // => 'lorem ipsum dolor sit amet'
 * ```
 *
 * ```ts
 * // From all uppercase letters
 * toSpaceCase('LOREM IPSUM DOLOR SIT AMET');
 * // => 'Lorem Ipsum Dolor Sit Amet'
 * ```
 *
 * ```ts
 * // From combined case
 * toSpaceCase('Lorem-Ipsum Dolor SitAmet');
 * // => 'Lorem Ipsum Dolor Sit Amet'
 * ```
 */

export const toSpaceCase = (str?: string): string => {
  if (!isString(str)) {
    return '';
  }

  const trimmed = str.trim();

  // Handle all uppercase with spaces
  if (/^[A-Z\s]+$/.test(trimmed)) {
    return trimmed.toLowerCase();
  }

  const hasSpaces = /\s/.test(trimmed);

  // If input contains spaces (combined case), just replace hyphens and underscores
  if (hasSpaces) {
    return trimmed.replace(/[-_]/g, ' ');
  }

  const hadDelimiters = /[-_]/.test(trimmed);

  // Process camelCase/PascalCase or kebab-case or snake_case
  let result = trimmed
    // Replace hyphens and underscores with spaces
    .replace(/[-_]/g, ' ')
    // Add space between lowercase and uppercase (camelCase)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // Add space before last uppercase in sequence followed by lowercase (PascalCase)
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    // Replace multiple spaces with single space
    .replace(/\s+/g, ' ');

  // Lowercase everything if it was camelCase/PascalCase
  // (no delimiters in original string)
  if (!hadDelimiters) {
    // Split by spaces and lowercase each word, but preserve all-uppercase words (2+ letters)
    result = result
      .split(' ')
      .map(word => {
        // Keep words that are all uppercase and have 2+ letters
        if (word.length >= 2 && /^[A-Z]+$/.test(word)) {
          return word;
        }
        return word.toLowerCase();
      })
      .join(' ');
  } else {
    // For kebab-case or snake_case, only lowercase the first character
    result = result.charAt(0).toLowerCase() + result.slice(1);
  }

  return result;
};
