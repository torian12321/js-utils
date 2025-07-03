import { describe, expect, it } from 'vitest';

import { isDateValid } from './isDateValid';

describe('dateUtils/isDateValid', () => {
  describe('should return `true`', () => {
    it('for valid Dates', () => {
      expect(isDateValid(new Date())).toBe(true);
      expect(isDateValid(new Date(2000))).toBe(true);
      expect(isDateValid(new Date(2000, 1, 1, 13))).toBe(true);
    });
    it('for valid numbers', () => {
      expect(isDateValid(2000)).toBe(true);
      expect(isDateValid(-100)).toBe(true);
    });

    it('for valid strings', () => {
      expect(isDateValid('2000')).toBe(true);
      expect(isDateValid('2000, 1, 6')).toBe(true);
    });
  });

  it('should return `false` for invalid values', () => {
    expect(isDateValid(undefined)).toBe(false);
    expect(isDateValid(null)).toBe(false);
    expect(isDateValid('today')).toBe(false);
    expect(isDateValid('Invalid Date')).toBe(false);
    expect(isDateValid('null')).toBe(false);
  });
});
