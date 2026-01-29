/** Shared arguments for formatting date/time/datetime */
export type FormatArgs = {
  /** Date format based on [day.js format](https://day.js.org/docs/en/display/format) */
  template?: string;
  /** If true, the date will be formatted using the user's local timezone */
  userLocalTimezone?: boolean;
  /**
   * Timezone to use for formatting. By default, it will use the
   * client timezone set by the `configureDateFormats` function.
   *
   * @default getClientTimezone()
   * @example "America/New_York", "Europe/Paris"
   * @see configureDateFormats
   */
  timezone?: string;
};
