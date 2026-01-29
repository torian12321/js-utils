import dayjs from 'dayjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { configureDateFormats } from './dateFormatManager';
import { formatDate } from './formatDate';

describe('dateUtils/formatDate', () => {
  const dateString = '2022-03-28T22:42:16.652Z';
  const dateDate = new Date('2021-02-26T22:42:16.652Z');

  beforeEach(() => {
    configureDateFormats({
      clientTimezone: 'Europe/Dublin',
      dateFormat: 'MM/DD/YYYY',
    });
  });

  it('should return empty string if date is not valid', () => {
    expect(formatDate('')).toBe('');
    expect(formatDate('today')).toBe('');
    expect(formatDate('invalid-date')).toBe('');
  });

  describe('template', () => {
    it('should return dateTime with default template', () => {
      expect(formatDate(dateString)).toBe('03/28/2022');
      expect(formatDate(dateDate)).toBe('02/26/2021');
    });

    it('should return dateTime with custom template', () => {
      const template = 'DD/MM/YYYY';

      expect(formatDate(dateString, { template })).toBe('28/03/2022');
      expect(formatDate(dateDate, { template })).toBe('26/02/2021');
    });
  });

  describe('timezone', () => {
    it('should return values for default timezone (Dublin)', () => {
      expect(formatDate(dateString)).toBe('03/28/2022');
      expect(formatDate(dateDate)).toBe('02/26/2021');
    });

    it('should return values for Dublin timezone', () => {
      const timezone = 'Europe/Dublin';

      expect(formatDate(dateString, { timezone })).toBe('03/28/2022');
      expect(formatDate(dateDate, { timezone })).toBe('02/26/2021');
    });
    // Same dates as above (Europe/Dublin), but in Toronto timezone
    it('should return values for Toronto timezone', () => {
      const timezone = 'America/Toronto';

      expect(formatDate(dateString, { timezone })).toBe('03/28/2022');
      expect(formatDate(dateDate, { timezone })).toBe('02/26/2021');
    });
  });

  describe('with local timezone formating', () => {
    let tzGuessSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      // Mock the timezone of the client to be Jerusalem to test the DST and standard time.
      // Freeze tz.guess() to be deterministic to ensure the tests are consistent.
      tzGuessSpy = vi
        .spyOn(dayjs.tz, 'guess')
        .mockReturnValue('Asia/Jerusalem');
    });

    afterEach(() => {
      tzGuessSpy.mockRestore();
      vi.restoreAllMocks();
    });

    it('winter date: +2h offset from UTC (Jerusalem standard time)', () => {
      // November: IST (UTC+2)
      const s = '2025-11-04T13:59:07.974763Z';
      expect(formatDate(s, { userLocalTimezone: true })).toBe('11/04/2025');
    });

    it('summer date: +3h offset from UTC (Jerusalem DST)', () => {
      // June: IDT (UTC+3)
      const s = '2025-06-01T12:34:56Z';
      expect(formatDate(s, { userLocalTimezone: true })).toBe('06/01/2025');
    });
  });
});
