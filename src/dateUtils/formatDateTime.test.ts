import dayjs from 'dayjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { configureDateFormats } from './dateFormatManager';
import { formatDateTime } from './formatDateTime';
import { isDST } from './isDST';

// Since isDST might depend on external factors like the system clock
// or specific date libraries, it's mocked to control
// the test environment and ensure consistent results.
vi.mock('./isDST', () => ({
  isDST: vi.fn(),
}));

describe('dateUtils/formatDateTime', () => {
  beforeEach(() => {
    configureDateFormats({
      dateFormat: 'MM/DD/YYYY',
    });
  });

  it('should return an empty string for invalid dates', () => {
    expect(formatDateTime('')).toBe('');
    expect(formatDateTime('today')).toBe('');
    expect(formatDateTime('invalid-date')).toBe('');
  });

  it('should return a string formatted for a given string in a specific timezone', () => {
    // Setup DST mock to return `true`
    vi.mocked(isDST).mockReturnValue(true);
    const dateString = '2022-03-28T22:42:16.652Z';
    const dateDate = new Date('2021-02-26T22:42:16.652Z');
    const customTemplate = 'YYYY-MM-DD mm:ssZ[Z]';

    expect(formatDateTime(dateString, { template: customTemplate })).toBe(
      '2022-03-28 42:16+01:00Z',
    );
    expect(formatDateTime(dateDate, { template: customTemplate })).toBe(
      '2021-02-26 42:16+01:00Z',
    );
  });

  it('should return a string formatted for a given string in a specific timezone outside DST', () => {
    // Setup DST mock to return `false`
    vi.mocked(isDST).mockReturnValue(false);
    const dateString = '2022-03-28T10:42:16.652Z';
    const dateDate = new Date('2021-02-26T12:42:16.652Z');
    const customTemplate = 'YYYY-MM-DD mm:ssZ[Z]';

    expect(formatDateTime(dateString, { template: customTemplate })).toBe(
      '2022-03-28 42:16+01:00Z',
    );
    expect(formatDateTime(dateDate, { template: customTemplate })).toBe(
      '2021-02-26 42:16+01:00Z',
    );
  });

  describe('with local timezone formating', () => {
    let tzGuessSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      // Freeze tz.guess() to be deterministic
      tzGuessSpy = vi.spyOn(dayjs.tz, 'guess').mockReturnValue('Europe/Dublin');
      configureDateFormats({ dateTimeFormat: 'YYYY-MM-DD HH:mm:ss' });
    });

    afterEach(() => {
      tzGuessSpy.mockRestore();
      vi.restoreAllMocks();
    });

    it('winter date: same calendar day as UTC (Dublin ~= UTC)', () => {
      // November: standard time (UTC+0)
      const s = '2025-11-04T13:59:07.974763Z';
      expect(formatDateTime(s, { userLocalTimezone: true })).toBe(
        '2025-11-04 13:59:07',
      );
    });

    it('summer date: may differ by +1h but same calendar day if not near midnight', () => {
      // June: DST (UTC+1)
      const s = '2025-06-01T12:34:56Z';
      expect(formatDateTime(s, { userLocalTimezone: true })).toBe(
        '2025-06-01 13:34:56',
      );
    });
  });
});
