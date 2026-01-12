import dayjs from 'dayjs';

import { getLocalTimezone } from '../getLocalTimezone';
import { isDateValid } from '../isDateValid';
import { getClientTimezone } from './dateFormatManager';
import type { FormatArgs } from './format.types';

/**
 * Core helper function for formatting date/time values.
 * Used internally by formatDate, formatTime, and formatDateTime.
 *
 * @internal
 */
export const formatDateValue = (
  dateValue: string | Date | null | undefined,
  defaultTemplate: string,
  options: FormatArgs = {},
): string => {
  const {
    timezone = getClientTimezone(),
    template = defaultTemplate,
    userLocalTimezone = false,
  } = options;

  if (!isDateValid(dateValue)) return '';

  if (userLocalTimezone) {
    const localDate = getLocalTimezone(dateValue);
    return localDate.format(template);
  }

  return dayjs(dateValue).tz(timezone).format(template);
};
