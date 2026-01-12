import dayjs from 'dayjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { configureDateFormats } from './dateFormatManager';
import { formatTime } from './formatTime';

describe('dateUtils/formatTime', () => {
  const dateString = '2022-03-28T22:42:16.652Z';
  const dateDate = new Date('2021-02-26T22:45:23.652Z');

  beforeEach(() => {
    configureDateFormats({
      clientTimezone: 'Europe/Dublin',
      timeFormat: 'HH:mm:ss',
    });
  });

  it('should return empty string if date is not valid', () => {
    expect(formatTime('')).toBe('');
    expect(formatTime('now')).toBe('');
    expect(formatTime('invalid-date')).toBe('');
  });

  describe('template', () => {
    it('should return dateTime with default template', () => {
      expect(formatTime(dateString)).toBe('23:42:16');
      expect(formatTime(dateDate)).toBe('22:45:23');
    });

    it('should return dateTime with custom template', () => {
      const template = 'h:m:s';

      expect(formatTime(dateString, { template })).toBe('11:42:16');
      expect(formatTime(dateDate, { template })).toBe('10:45:23');
    });
  });

  describe('timezone', () => {
    it('should return values for default timezone (Dublin)', () => {
      expect(formatTime(dateString)).toBe('23:42:16');
      expect(formatTime(dateDate)).toBe('22:45:23');
    });

    it('should return values for Dublin timezone', () => {
      const timezone = 'Europe/Dublin';

      expect(formatTime(dateString, { timezone })).toBe('23:42:16');
      expect(formatTime(dateDate, { timezone })).toBe('22:45:23');
    });
    // Same dates as above (Europe/Dublin), but in Toronto timezone
    it('should return values for Toronto timezone', () => {
      const timezone = 'America/Toronto';

      expect(formatTime(dateString, { timezone })).toBe('18:42:16');
      expect(formatTime(dateDate, { timezone })).toBe('17:45:23');
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
      expect(formatTime(s, { userLocalTimezone: true })).toBe('15:59:07');
    });

    it('summer date: +3h offset from UTC (Jerusalem DST)', () => {
      // June: IDT (UTC+3)
      const s = '2025-06-01T12:34:56Z';
      expect(formatTime(s, { userLocalTimezone: true })).toBe('15:34:56');
    });
  });
});
