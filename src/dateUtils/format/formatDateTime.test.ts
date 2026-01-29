import dayjs from 'dayjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { configureDateFormats } from './dateFormatManager';
import { formatDateTime } from './formatDateTime';

describe('dateUtils/formatDateTime', () => {
  const dateString = '2022-03-28T22:42:16.652Z';
  const dateDate = new Date('2021-02-26T22:42:16.652Z');

  beforeEach(() => {
    configureDateFormats({
      clientTimezone: 'Europe/Dublin',
      dateTimeFormat: 'MM/DD/YYYY HH:mm',
    });
  });

  it('should return an empty string for invalid dates', () => {
    expect(formatDateTime('')).toBe('');
    expect(formatDateTime('today')).toBe('');
    expect(formatDateTime('invalid-date')).toBe('');
  });

  describe('template', () => {
    it('should return dateTime with default template', () => {
      expect(formatDateTime(dateString)).toBe('03/28/2022 23:42');
      expect(formatDateTime(dateDate)).toBe('02/26/2021 22:42');
    });
    it('should return dateTime with custom template', () => {
      const template = 'YYYY-MM-DD mm:ss';

      expect(formatDateTime(dateString, { template })).toBe('2022-03-28 42:16');
      expect(formatDateTime(dateDate, { template })).toBe('2021-02-26 42:16');
    });
  });

  describe('timezone', () => {
    it('should return values for default timezone (Dublin)', () => {
      expect(formatDateTime(dateString)).toBe('03/28/2022 23:42');
      expect(formatDateTime(dateDate)).toBe('02/26/2021 22:42');
    });

    it('should return values for Dublin timezone', () => {
      const timezone = 'Europe/Dublin';

      expect(formatDateTime(dateString, { timezone })).toBe('03/28/2022 23:42');
      expect(formatDateTime(dateDate, { timezone })).toBe('02/26/2021 22:42');
    });
    // Same dates as above (Europe/Dublin), but in Toronto timezone
    it('should return values for Toronto timezone', () => {
      const timezone = 'America/Toronto';

      expect(formatDateTime(dateString, { timezone })).toBe('03/28/2022 18:42');
      expect(formatDateTime(dateDate, { timezone })).toBe('02/26/2021 17:42');
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
      expect(formatDateTime(s, { userLocalTimezone: true })).toBe(
        '11/04/2025 15:59',
      );
    });

    it('summer date: +3h offset from UTC (Jerusalem DST)', () => {
      // June: IDT (UTC+3)
      const s = '2025-06-01T12:34:56Z';
      expect(formatDateTime(s, { userLocalTimezone: true })).toBe(
        '06/01/2025 15:34',
      );
    });
  });
});
