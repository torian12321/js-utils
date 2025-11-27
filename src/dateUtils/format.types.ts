/** Shared arguments for formatting date/time/datetime */
export type FormatArgs = {
  /** Date format based on [day.js format](https://day.js.org/docs/en/display/format) */
  template?: string;
  /** If true, the date will be formatted using the user's local timezone */
  userLocalTimezone?: boolean;
};
