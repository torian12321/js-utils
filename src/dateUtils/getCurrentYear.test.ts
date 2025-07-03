import { describe, expect, it, vi } from 'vitest';

import { getCurrentYear } from './getCurrentYear';

describe('dateUtils/getCurrentYear', () => {
  it('should current year as a number', () => {
    const mockDateObject = new Date('2021-02-26T22:42:16.652Z');
    vi.spyOn(globalThis, 'Date').mockImplementation(() => mockDateObject);

    expect(getCurrentYear()).toBe(2021);
  });
});
