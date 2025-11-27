import { afterEach, describe, expect, it, vi } from 'vitest';

import { mockDateGlobal } from './_testHelpers';
import { getCurrentYear } from './getCurrentYear';

describe('dateUtils/getCurrentYear', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should current year as a number', () => {
    mockDateGlobal('2021-02-26T22:42:16.652Z');

    expect(getCurrentYear()).toBe(2021);
  });
});
