import { beforeEach, describe, expect, it, vi } from 'vitest';

import { configureDateFormats } from './dateFormatManager';
import { getCurrentDate } from './getCurrentDate';

describe('dateUtils/getCurrentDate', () => {
  beforeEach(() => {
    configureDateFormats({
      dateFormat: 'MM/DD/YYYY',
    });
  });

  it('should current dateTime as string', () => {
    const mockDateObject = new Date('2021-02-26T22:42:16.652Z');
    vi.spyOn(globalThis, 'Date').mockImplementation(() => mockDateObject);

    expect(getCurrentDate()).toBe('02/26/2021');
  });

  it('should current dateTime as string with custom format', () => {
    const customTemplate = 'YYYY-MM-DD';
    const mockDateObject = new Date('2021-02-26T22:42:16.652Z');
    vi.spyOn(globalThis, 'Date').mockImplementation(() => mockDateObject);

    expect(getCurrentDate(customTemplate)).toBe('2021-02-26');
  });
});
