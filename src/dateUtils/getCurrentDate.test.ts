import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { configureDateFormats } from './format/dateFormatManager';
import { mockDateGlobal } from './_testHelpers';
import { getCurrentDate } from './getCurrentDate';

describe('dateUtils/getCurrentDate', () => {
  beforeEach(() => {
    configureDateFormats({
      dateFormat: 'MM/DD/YYYY',
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should current dateTime as string', () => {
    mockDateGlobal('2021-02-26T22:42:16.652Z');

    expect(getCurrentDate()).toBe('02/26/2021');
  });

  it('should current dateTime as string with custom format', () => {
    const customTemplate = 'YYYY-MM-DD';
    mockDateGlobal('2021-02-26T22:42:16.652Z');

    expect(getCurrentDate(customTemplate)).toBe('2021-02-26');
  });
});
