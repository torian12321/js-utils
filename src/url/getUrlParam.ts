import { isString } from 'src/typeChecker';

/**
 * Retrieves the value of a specified parameter from the current URL's query string.
 *
 * @param {string} param - The name of the parameter to retrieve from the URL.
 * @returns {string | null} The value of the specified parameter if it exists,
 *                          or null if the parameter is not present in the URL.
 *
 * @example
 * ```ts
 * // If the current URL is "https://example.com?name=John&age=30"
 * getUrlParam('name');
 * // => "John"
 * ```
 *
 * ```ts
 * // If the current URL is "https://example.com?name=John&age=30"
 * getUrlParam('age');
 * // => "30"
 * ```
 *
 * ```ts
 * // If the current URL is "https://example.com?name=John&age=30"
 * getUrlParam('nonexistent');
 * // => null
 * ```
 */

export const getUrlParam = <T extends string>(param: string): T | null => {
  const url = new URL(window.location.href);

  const paramValue = url.searchParams.get(param);

  if (!isString(paramValue)) return null;

  return decodeURIComponent(paramValue) as T;
};
