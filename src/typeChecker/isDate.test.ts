import { describe, expect, it } from 'vitest';

import { emptyObj, userObj1 } from 'src/__mock';

import { isDate } from './isDate';

describe('typeChecker/isDate', () => {
  it('should return `true` for dates', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(new Date(2000, 1, 1, 13))).toBe(true);
  });

  it('should return `false` for non-dates', () => {
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);

    expect(isDate('some valid text')).toBe(false);
    expect(isDate(12345)).toBe(false);
    expect(isDate(userObj1)).toBe(false);
    expect(isDate(emptyObj)).toBe(false);

    expect(isDate(Function)).toBe(false);
    expect(isDate(new Error())).toBe(false);
  });
});
