import { describe, expect, it } from 'vitest';

import { isNumber } from './isNumber';

describe('typeChecker/isNumber', () => {
  it('should return `true` for numbers', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
  });

  it('should return `false` for non-numbers', () => {
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(NaN)).toBe(false);

    expect(isNumber([1, 2, 3])).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber({ 0: 1, length: 1 })).toBe(false);
    expect(isNumber(/x/)).toBe(false);

    expect(isNumber(Function)).toBe(false);
    expect(isNumber(new Date())).toBe(false);
    expect(isNumber(new Error())).toBe(false);
  });
});
