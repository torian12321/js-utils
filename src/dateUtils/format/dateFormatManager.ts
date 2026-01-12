import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import {
  DEFAULT_CLIENT_TZ,
  DEFAULT_DATE_FORMAT,
  DEFAULT_DATETIME_FORMAT,
  DEFAULT_TIME_FORMAT,
} from '../constants';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault(DEFAULT_CLIENT_TZ);

// Create a closure to protect the constants
const dateFormatManager = (() => {
  // Private variables
  let currentClientTimezone = DEFAULT_CLIENT_TZ;
  let currentDateFormat = DEFAULT_DATE_FORMAT;
  let currentTimeFormat = DEFAULT_TIME_FORMAT;
  let currentDateTimeFormat = DEFAULT_DATETIME_FORMAT;

  return {
    /**
     * - Set client timezone [IANA timezone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
     * - Set formats based on [day.js format](https://day.js.org/docs/en/display/format)
     */
    configureDateFormats: (config: {
      /** IANA timezone string, e.g., "Asia/Taipei", "Europe/Paris" */
      clientTimezone?: string;
      dateFormat?: string;
      timeFormat?: string;
      dateTimeFormat?: string;
    }): void => {
      currentClientTimezone = config.clientTimezone ?? currentClientTimezone;
      dayjs.tz.setDefault(currentClientTimezone);

      currentDateFormat = config.dateFormat ?? currentDateFormat;
      currentTimeFormat = config.timeFormat ?? currentTimeFormat;
      currentDateTimeFormat =
        config.dateTimeFormat ?? `${currentDateFormat} ${currentTimeFormat}`;
    },

    // Value getters
    getClientTimezone: (): string => currentClientTimezone,
    getDateFormat: (): string => currentDateFormat,
    getTimeFormat: (): string => currentTimeFormat,
    getDateTimeFormat: (): string => currentDateTimeFormat,
  };
})();

// Export the methods from the closure
export const {
  configureDateFormats,
  getClientTimezone,
  getDateFormat,
  getTimeFormat,
  getDateTimeFormat,
} = dateFormatManager;
