import dayjs from 'dayjs';

import { formatDateTime } from './formatDateTime';

/**
 * Return the current dateTime based on the user's computer.
 *
 * @returns {string} Returns current dateTime.
 *
 * @example
 * ```ts
 * getCurrentDateTime();
 * // => '2021-02-26 22:42:16'
 * ```
 */

export const getCurrentDateTime = (template?: string): string =>
  formatDateTime(dayjs().toString(), { template });
