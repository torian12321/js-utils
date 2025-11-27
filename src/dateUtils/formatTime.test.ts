import dayjs from 'dayjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { configureDateFormats } from './dateFormatManager';
import { formatTime } from './formatTime';
import { isDST } from './isDST';

// Since isDST might depend on external factors like the system clock
// or specific date libraries, it's mocked to control
// the test environment and ensure consistent results.
vi.mock('./isDST', () => ({
  isDST: vi.fn(),
}));

describe('dateUtils/formatTime', () => {
  beforeEach(() => {
    configureDateFormats({
      timeFormat: 'HH:mm:ss',
    });
  });

  it('should return empty string if date is not valid', () => {
    expect(formatTime('')).toBe('');
    expect(formatTime('now')).toBe('');
    expect(formatTime('invalid-date')).toBe('');
  });

  describe('with default template formating', () => {
    it('should return a string formated for a given string', () => {
      vi.mocked(isDST).mockReturnValue(true);
      const dateString = '2022-03-28T15:42:16';

      expect(formatTime(dateString)).toBe('15:42:16');
    });

    it('should return a string formated for a given Date', () => {
      vi.mocked(isDST).mockReturnValue(true);
      const dateDate = new Date('2021-02-26T22:55:16');

      expect(formatTime(dateDate)).toBe('22:55:16');
    });
  });

  describe('with custom template formating', () => {
    it('should return a string formated for a given string', () => {
      vi.mocked(isDST).mockReturnValue(true);
      const dateString = '2022-03-28T22:42:16.652Z';
      const customTemplate = 'mm-ss';

      expect(formatTime(dateString, { template: customTemplate })).toBe(
        '42-16',
      );
    });

    it('should return a string formated for a given Date', () => {
      vi.mocked(isDST).mockReturnValue(true);
      const dateDate = new Date('2021-02-26T22:42:16.652Z');
      const customTemplate = 'h:m:s';

      expect(formatTime(dateDate, { template: customTemplate })).toBe(
        '10:42:16',
      );
    });
  });

  it('should format a valid time correctly when not in DST', () => {
    vi.mocked(isDST).mockReturnValue(false);
    const mockDate = '2021-06-01T12:34:56Z';

    expect(formatTime(mockDate, { template: 'mm-ss' })).toBe('34-56');
  });

  describe('with local timezone formating', () => {
    let tzGuessSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      // Freeze tz.guess() to be deterministic
      tzGuessSpy = vi.spyOn(dayjs.tz, 'guess').mockReturnValue('Europe/Dublin');
      configureDateFormats({ timeFormat: 'HH:mm:ss' });
    });

    afterEach(() => {
      tzGuessSpy.mockRestore();
      vi.restoreAllMocks();
    });

    it('returns empty string for invalid inputs', () => {
      expect(formatTime('', { userLocalTimezone: true })).toBe('');
      expect(formatTime('invalid-date', { userLocalTimezone: true })).toBe('');
    });

    describe('UTC (Z) inputs → convert to local Dublin time', () => {
      it('winter date (Dublin ~= UTC) keeps the same hour', () => {
        // November is standard time in Dublin (UTC+0)
        const s = '2025-11-04T13:59:07.974763Z';
        expect(formatTime(s, { userLocalTimezone: true })).toBe('13:59:07');
      });

      it('summer date (Dublin = UTC+1) shifts +1h', () => {
        // June is typically DST (UTC+1)
        const s = '2025-06-01T12:34:56Z';
        expect(formatTime(s, { userLocalTimezone: true })).toBe('13:34:56');
      });

      it('parses Date objects as instants and converts correctly', () => {
        // February is standard time (UTC+0) in Dublin
        const d = new Date('2021-02-26T22:55:16Z');
        expect(formatTime(d, { userLocalTimezone: true })).toBe('22:55:16');
      });
    });
  });
});
