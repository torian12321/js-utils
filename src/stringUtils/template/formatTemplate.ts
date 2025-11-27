type ReturnType = (...values: string[]) => string;

/**
 * Creates a template function that takes any number of string variables and fills a template.
 *
 * @param {TemplateStringsArray} strings - The template strings.
 * @param {number[]} keys - The keys to use in the template.
 * @returns {ReturnType} The template function.
 *
 * @example
 * ```ts
 * const template = formatTemplate`Hello ${0}. Welcome to ${1}.`;
 *
 * template('James', 'China');
 * // => 'Hello James. Welcome to China.'
 * ```
 */

export const formatTemplate = (
  strings: TemplateStringsArray,
  ...keys: number[]
): ReturnType => {
  return (...values: string[]) =>
    strings.reduce((acc, str, i) => acc + str + (values[keys[i]] ?? ''), '');
};
