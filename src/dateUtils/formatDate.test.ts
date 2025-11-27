import dayjs from 'dayjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { configureDateFormats } from './dateFormatManager';
import { formatDate } from './formatDate';

describe('dateUtils/formatDate', () => {
  beforeEach(() => {
    configureDateFormats({
      dateFormat: 'MM/DD/YYYY',
    });
  });

  it('should return empty string if date is not valid', () => {
    expect(formatDate('')).toBe('');
    expect(formatDate('today')).toBe('');
    expect(formatDate('invalid-date')).toBe('');
  });

  it('should return a string formated', () => {
    const dateString = '2022-03-28T22:42:16.652Z';
    const dateDate = new Date('2021-02-26T22:42:16.652Z');

    expect(formatDate(dateString)).toBe('03/28/2022');
    expect(formatDate(dateDate)).toBe('02/26/2021');
  });

  describe('with custom template formating', () => {
    it('should return a string formated for a given string', () => {
      const dateString = '2022-03-28T22:42:16.652Z';
      const customTemplate = 'DD/MM/YYYY';

      expect(formatDate(dateString, { template: customTemplate })).toBe(
        '28/03/2022',
      );
    });

    it('should return a string formated for a given Date', () => {
      const dateDate = new Date('2021-02-26T22:42:16.652Z');
      const customTemplate = 'DD/MM/YYYY';

      expect(formatDate(dateDate, { template: customTemplate })).toBe(
        '26/02/2021',
      );
    });
  });

  describe('with local timezone formating', () => {
    let tzGuessSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      // Freeze tz.guess() to be deterministic
      tzGuessSpy = vi.spyOn(dayjs.tz, 'guess').mockReturnValue('Europe/Dublin');
      configureDateFormats({ dateFormat: 'YYYY-MM-DD' });
    });

    afterEach(() => {
      tzGuessSpy.mockRestore();
      vi.restoreAllMocks();
    });

    it('winter date: same calendar day as UTC (Dublin ~= UTC)', () => {
      // November: standard time (UTC+0)
      const s = '2025-11-04T13:59:07.974763Z';
      expect(formatDate(s, { userLocalTimezone: true })).toBe('2025-11-04');
    });

    it('summer date: may differ by +1h but same calendar day if not near midnight', () => {
      // June: DST (UTC+1)
      const s = '2025-06-01T12:34:56Z';
      expect(formatDate(s, { userLocalTimezone: true })).toBe('2025-06-01');
    });

    it('handles midnight rollover to NEXT day in local time', () => {
      // 23:30 UTC in June → 00:30 next day in Dublin
      const s = '2025-06-01T23:30:00Z';
      expect(formatDate(s, { userLocalTimezone: true })).toBe('2025-06-02');
    });
    it('handles next-day rollover when UTC time crosses local midnight', () => {
      const s = '2022-03-28T23:30:00Z'; // 00:30 local (next day)
      expect(
        formatDate(s, {
          template: 'DD/MM/YYYY',
          userLocalTimezone: true,
        }),
      ).toBe('29/03/2022');
    });
    it('handles midnight rollover to PREVIOUS day in local time', () => {
      // Around midnight.
      // For Dublin (UTC or UTC+1), 00:30 UTC stays the same calendar day.
      const s = '2025-11-01T00:30:00Z';
      expect(formatDate(s, { userLocalTimezone: true })).toBe('2025-11-01');
    });

    it('accepts Date objects', () => {
      const d = new Date('2021-02-26T22:55:16Z');
      expect(formatDate(d, { userLocalTimezone: true })).toBe('2021-02-26');
    });
  });
});
