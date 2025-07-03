import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import {
  DEFAULT_DATE_FORMAT,
  DEFAULT_DATETIME_FORMAT,
  DEFAULT_TIME_FORMAT,
} from './constants';

dayjs.extend(utc);
dayjs.extend(timezone);

// Create a closure to protect the constants
const dateFormatManager = (() => {
  // Private variables
  let currentDateFormat = DEFAULT_DATE_FORMAT;
  let currentTimeFormat = DEFAULT_TIME_FORMAT;
  let currentDateTimeFormat = DEFAULT_DATETIME_FORMAT;

  return {
    /** Set formats based on [day.js format](https://day.js.org/docs/en/display/format) */
    configureDateFormats: (config: {
      dateFormat?: string;
      timeFormat?: string;
      dateTimeFormat?: string;
    }): void => {
      currentDateFormat = config.dateFormat ?? currentDateFormat;
      currentTimeFormat = config.timeFormat ?? currentTimeFormat;
      currentDateTimeFormat =
        config.dateTimeFormat ?? `${currentDateFormat} ${currentTimeFormat}`;
    },

    // Value getters
    getDateFormat: (): string => currentDateFormat,
    getTimeFormat: (): string => currentTimeFormat,
    getDateTimeFormat: (): string => currentDateTimeFormat,
  };
})();

// Export the methods from the closure
export const {
  configureDateFormats,
  getDateFormat,
  getTimeFormat,
  getDateTimeFormat,
} = dateFormatManager;
