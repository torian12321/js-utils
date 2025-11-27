import { describe, expect, it } from 'vitest';

import { isString } from './isString';

describe('typeChecker/isString', () => {
  it('should return `true` for strings', () => {
    expect(isString('some valid text')).toBe(true);
    expect(isString('')).toBe(true);
  });

  it('should return `false` for non-strings', () => {
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);

    expect(isString([1, 2, 3])).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString({ 0: 1, length: 1 })).toBe(false);
    expect(isString(1)).toBe(false);
    expect(isString(/x/)).toBe(false);

    expect(isString(Function)).toBe(false);
    expect(isString(new Date())).toBe(false);
    expect(isString(new Error())).toBe(false);
  });
});
