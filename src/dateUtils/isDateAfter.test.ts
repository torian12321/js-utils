import { describe, expect, it } from 'vitest';

import { isDateAfter } from './isDateAfter';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

describe('dateUtils/isDateAfter', () => {
  it('should check for `string` values', () => {
    expect(isDateAfter('2000, 1, 6', '2000, 1, 1')).toBe(true);
    expect(isDateAfter('2010', '2000')).toBe(true);

    expect(isDateAfter('2000, 1, 1', '2000, 1, 6')).toBe(false);
    expect(isDateAfter('2000', '2010')).toBe(false);
  });

  it('should check for `Date` values', () => {
    expect(isDateAfter(tomorrow, today)).toBe(true);
    expect(isDateAfter(today, tomorrow)).toBe(false);
  });
});
