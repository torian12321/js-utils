/**
 * Checks if a given date is during Daylight Saving Time (DST).
 *
 * This function determines if the UTC offset of the provided date changes the following day,
 * which indicates a DST transition. It first converts the input date to a Dayjs object,
 * then compares the UTC offset of the date with the offset of the next day to determine if the date is in DST.
 *
 * @param {string | Date} date - The date to check for DST, provided as a string or Date object.
 * @returns {boolean} Returns true if the date is during DST, otherwise false.
 *
 * @example
 *
 * ```ts
 * isDST(new Date('June 1, 2023'));
 * // => true
 * ```
 *
 * ```ts
 * isDST('December 1, 2023');
 * // => false
 * ```
 */

// eslint-disable-next-line @typescript-eslint/naming-convention
export const isDST = (date: string | Date): boolean => {
  const inputDate = new Date(date);

  // Create dates for January 1st and July 1st of the same year, typically not in DST
  const janFirst = new Date(inputDate.getFullYear(), 0, 1);
  const julFirst = new Date(inputDate.getFullYear(), 6, 1);

  // Get the timezone offsets in minutes
  const janFirstOffset = janFirst.getTimezoneOffset();
  const julFirstOffset = julFirst.getTimezoneOffset();
  const inputDateOffset = inputDate.getTimezoneOffset();

  // Determine the standard timezone offset (the maximum offset in the year could be considered as standard)
  const standardOffset = Math.max(janFirstOffset, julFirstOffset);

  // If the input date's offset is less than the standard offset, it means it's in DST
  return inputDateOffset < standardOffset;
};
