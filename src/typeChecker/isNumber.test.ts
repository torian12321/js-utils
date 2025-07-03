import { describe, expect, it } from 'vitest';

import { isNumber } from './isNumber';

describe('typeChecker/isNumber', () => {
  it('should return `true` for number values', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
  });

  it('should return `false` for non-boolean values', () => {
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber('123456')).toBe(false);
    expect(isNumber('true')).toBe(false);
    expect(isNumber('false')).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber(() => {})).toBe(false);
  });
});
