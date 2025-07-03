/**
 * Return the current year based on the user's computer.
 *
 * @returns {number} Returns current year.
 * @example
 *
 * getCurrentYear()
 * // => 2024
 */

export const getCurrentYear = (): number => new Date().getFullYear();
