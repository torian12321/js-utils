import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

/**
 * Get the current timestamp in UTC format.
 *
 * @returns {string} Returns current timestamp in UTC format.
 *
 * @example
 * ```ts
 * getTimeStamp();
 * // => '2021-02-26T22:42:16.652Z'
 * ```
 */

export const getTimeStamp = (): string => dayjs().utc().format();
