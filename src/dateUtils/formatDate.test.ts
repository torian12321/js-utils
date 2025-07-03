import { beforeEach, describe, expect, it } from 'vitest';

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

      expect(formatDate(dateString, customTemplate)).toBe('28/03/2022');
    });

    it('should return a string formated for a given Date', () => {
      const dateDate = new Date('2021-02-26T22:42:16.652Z');
      const customTemplate = 'DD/MM/YYYY';

      expect(formatDate(dateDate, customTemplate)).toBe('26/02/2021');
    });
  });
});
