/**
 * Removes a specified parameter from the current URL's query string.
 *
 * @param {string} param - The name of the parameter to be removed from the URL.
 * @returns {void}
 *
 * @example
 * ```ts
 * // If the current URL is https://example.com/?page=1&sort=asc
 * clearUrlParam('sort');
 * // The URL will be updated to https://example.com/?page=1
 * ```
 */

export const clearUrlParam = (param: string): void => {
  const url = new URL(window.location.href);
  url.searchParams.delete(param);
  window.history.pushState({}, '', url.toString());
};
