const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates if string is a valid email format.
 *
 * @param {string} value - The string to validate
 * @returns {boolean} `true` if the string is a valid email format, `false` otherwise
 *
 * @example
 * ```ts
 * isEmailValid('test@example.com');
 * // => true
 * ```
 *
 * ```ts
 * isEmailValid('invalid-email');
 * // => false
 * ```
 */
export const isEmailValid = (value: string): boolean => EMAIL_REGEX.test(value);
