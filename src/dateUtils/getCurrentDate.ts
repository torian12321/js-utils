import { formatDate } from './format/formatDate';

/**
 * Returns the current date formatted according to the specified template.
 * If no template is provided, it defaults to ISO string format.
 *
 * @param {string} [template] - The format template to apply to the current date.
 * @returns {string} The formatted current date.
 *
 * @example
 * ```ts
 * getCurrentDate();
 * // => '2021-02-26 22:42:16'
 * ```
 */

export const getCurrentDate = (template?: string): string => {
  const currentDate = new Date();

  return formatDate(currentDate.toISOString(), { template });
};
