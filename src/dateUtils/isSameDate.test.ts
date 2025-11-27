import { describe, expect, it } from 'vitest';

import { isSameDate } from './isSameDate';

describe('dateUtils/isSameDate', () => {
  it('should return `true`', () => {
    expect(isSameDate(new Date(), new Date())).toBe(true);
    expect(
      isSameDate('2022-03-28T22:42:16.652Z', '2022-03-28T22:42:16.652Z'),
    ).toBe(true);
    expect(isSameDate('2022-03-28', '2022-03-28')).toBe(true);
    expect(
      isSameDate(
        new Date('2022-03-28T22:42:16.652Z'),
        new Date('2022-03-28T22:42:16.652Z'),
      ),
    ).toBe(true);
    expect(
      isSameDate(
        '2022-03-28T22:42:16.652Z',
        new Date('2022-03-28T22:42:16.652Z'),
      ),
    ).toBe(true);
  });

  it('should return `false`', () => {
    expect(isSameDate('2010-01-02', '2010-01-01')).toBe(false);
    expect(isSameDate(new Date('2022-03-20'), new Date('2025-03-20'))).toBe(
      false,
    );
    expect(isSameDate(new Date(), '2010-01-01')).toBe(false);
  });

  it('should return `false` when values are the same but invalid dates', () => {
    expect(isSameDate('today', 'today')).toBe(false);
    expect(isSameDate('null', 'null')).toBe(false);
  });
});
