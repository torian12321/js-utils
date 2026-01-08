/**
 * IANA Client timezone string - business timezone, not device timezone.
 * e.g: "Asia/Taipei", "Europe/Dublin"
 *
 * @default "Europe/Dublin"
 */
export const DEFAULT_CLIENT_TZ = 'Europe/Dublin';

// Default formats
export const DEFAULT_DATE_FORMAT = 'MM/DD/YYYY';
export const DEFAULT_TIME_FORMAT = 'HH:mm';
export const DEFAULT_DATETIME_FORMAT = `${DEFAULT_DATE_FORMAT} ${DEFAULT_TIME_FORMAT}`;
