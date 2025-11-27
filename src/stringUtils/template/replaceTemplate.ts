/**
 * Replaces template placeholders in a string with provided values.
 *
 * @param {string} template - The template string containing placeholders in the format ${key}.
 * @param {Object.<string, string>} [values={}] - An object containing key-value pairs for replacement.
 * @returns {string} The template string with placeholders replaced by corresponding values.
 *
 * @example
 * ```ts
 * const template = "Hello, ${name}!";
 *
 * replaceTemplate(template, { name: "World" });
 * // => "Hello, World!"
 * ```
 */

export const replaceTemplate = (
  template: string,
  values: { [key: string]: string } = {},
  options: {
    removeSideChars?: string[];
    trimSpaces?: boolean;
  } = {},
): string => {
  const { removeSideChars = [], trimSpaces = true } = options;

  let result = template.replace(/\${(.*?)}/g, (_, key) => {
    if (key in values) {
      return values[key];
    }
    // If a variable is not provided, it will be replaced with an empty string
    // and a warning will be logged to the console, this is useful for debugging.
    //
    // Do not replace with an throwError, because it will break the code, a variable can be obtained from a delayed API call.
    console.warn(`Warning: Unmatched variable "${key}" in template`);
    return '';
  });

  if (trimSpaces) {
    result = result.replace(/^\s+|\s+$/g, '');
  }

  return result.replace(
    new RegExp(
      `^[${removeSideChars.join('')}]+|[${removeSideChars.join('')}]+$`,
      'g',
    ),
    '',
  );
};
