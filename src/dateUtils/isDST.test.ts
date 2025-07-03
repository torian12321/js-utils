import { describe, expect, it } from 'vitest';

import { isDST } from './isDST';

describe('dateUtils/isDST', () => {
  it('should return `true` when the date is in daylight saving time', () => {
    // Example for New York on a date within DST
    const dateString = 'June 1, 2023';
    const dateDate = new Date('June 1, 2023');

    expect(isDST(dateDate)).toBe(false);
    expect(isDST(dateString)).toBe(false);
  });

  it('should return `false` when the date is NOT in daylight saving time', () => {
    // Example for New York on a date outside DST
    const dateString = 'December 1, 2023';
    const dateDate = new Date('December 1, 2023');

    expect(isDST(dateDate)).toBe(false);
    expect(isDST(dateString)).toBe(false);
  });
});
