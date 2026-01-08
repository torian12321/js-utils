import { isString } from 'src/typeChecker';

/**
 * Takes a string and returns its snake_case version.
 *
 * @param {string} str - The string to convert
 * @returns {string} The snake_case version of the string
 *
 * @example
 * ```ts
 * // From spaceCase
 * toSnakeCase('lorem ipsum dolor sit amet');
 * // => 'lorem_ipsum_dolor_sit_amet'
 * ```
 *
 * ```ts
 * // From pascalCase
 * toSnakeCase('LoremIpsumDolorSitAmet');
 * // => 'lorem_ipsum_dolor_sit_amet'
 * ```
 *
 * ```ts
 * // From camelCase
 * toSnakeCase('LoremIpsumABC');
 * // => 'lorem_ipsum_abc'
 * ```
 *
 * ```ts
 * // From all uppercase letters
 * toSnakeCase('LOREM IPSUM DOLOR SIT AMET');
 * // => 'lorem_ipsum_dolor_sit_amet'
 * ```
 *
 * ```ts
 * // From kebab-case
 * toSnakeCase('lorem-ipsum-dolor-sit-amet');
 * // => 'lorem_ipsum_dolor_sit_amet'
 * ```
 *
 * ```ts
 * // From combined case
 * toSnakeCase('Lorem-Ipsum Dolor SitAmet');
 * // => 'lorem_ipsum_dolor_sit_amet'
 * ```
 */
export const toSnakeCase = (str?: string): string => {
  if (!isString(str)) {
    return '';
  }
  return (
    str
      .trim()
      // Add underscore between lowercase and uppercase (camelCase)
      .replace(/([a-z])([A-Z])/g, '$1_$2')
      // Add underscore before last uppercase in sequence followed by lowercase (pascalCase)
      .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
      // Replace spaces with underscores
      .replace(/\s+/g, '_')
      // Replace "-" with underscores (kebab-case)
      .replace(/-/g, '_')
      // Replace multiple underscores with single underscore (multiple uppercase letters)
      .replace(/_+/g, '_')
      // Remove leading underscore if present
      .replace(/^_/, '')
      .toLowerCase()
  );
};
