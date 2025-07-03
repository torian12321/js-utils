import { describe, expect, it } from 'vitest';

import { isDateBefore } from './isDateBefore';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

describe('dateUtils/isDateBefore', () => {
  it('should check for `string` values', () => {
    expect(isDateBefore('2000, 1, 1', '2000, 1, 6')).toBe(true);
    expect(isDateBefore('2000', '2010')).toBe(true);

    expect(isDateBefore('2000, 1, 6', '2000, 1, 1')).toBe(false);
    expect(isDateBefore('2010', '2000')).toBe(false);
  });

  it('should check for `Date` values', () => {
    expect(isDateBefore(today, tomorrow)).toBe(true);
    expect(isDateBefore(tomorrow, today)).toBe(false);
  });
});
