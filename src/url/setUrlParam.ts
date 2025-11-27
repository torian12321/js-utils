/**
 * Sets or updates a parameter in the current URL's query string.
 *
 * @param {string} param - The name of the parameter to set or update in the URL.
 * @param {string} value - The value to assign to the parameter.
 * @returns {void}
 *
 * @description
 * This function modifies the current URL by setting or updating a query parameter.
 * If the parameter already exists, its value is updated. If it doesn't exist, it's added to the URL.
 * The function uses the browser's History API to update the URL without reloading the page.
 *
 * @example
 * ```ts
 * // If the current URL is "https://example.com?existingParam=oldValue"
 * setUrlParam('newParam', 'newValue');
 * // URL becomes "https://example.com?existingParam=oldValue&newParam=newValue"
 * ```
 *
 * ```ts
 * // If the current URL is "https://example.com?existingParam=oldValue"
 * setUrlParam('existingParam', 'updatedValue');
 * // URL becomes "https://example.com?existingParam=updatedValue&newParam=newValue"
 * ```
 *
 * ```ts
 * // If the current URL is "https://example.com?existingParam=oldValue"
 * setUrlParam('emptyParam', '');
 * // URL becomes "https://example.com?existingParam=oldValue&emptyParam="
 * ```
 */

export const setUrlParam = <ParamValues extends string>(
  param: string,
  value: ParamValues,
): void => {
  const url = new URL(window.location.href);
  url.searchParams.set(encodeURIComponent(param), encodeURIComponent(value));
  window.history.pushState({}, '', url.toString());
};
