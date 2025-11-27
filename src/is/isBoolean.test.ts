import { describe, expect, it } from 'vitest';

import { isBoolean } from './isBoolean';

describe('is/isBoolean', () => {
  it('should return true if value is boolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });

  it('should return false if value is not boolean', () => {
    expect(isBoolean('true')).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(NaN)).toBe(false);
    expect(isBoolean(Infinity)).toBe(false);
  });
});
