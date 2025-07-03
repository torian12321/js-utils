import { beforeEach, describe, expect, it, vi } from 'vitest';

import { configureDateFormats } from './dateFormatManager';
import { getCurrentDateTime } from './getCurrentDateTime';

describe('dateUtils/getCurrentDateTime', () => {
  beforeEach(() => {
    configureDateFormats({
      dateTimeFormat: 'MM/DD/YYYY HH:mm',
    });
  });

  it('should return current dateTime as string', () => {
    const mockDateObject = new Date('2021-02-26T22:42:16.652Z');
    vi.spyOn(globalThis, 'Date').mockImplementation(() => mockDateObject);

    expect(getCurrentDateTime()).toBe('02/26/2021 22:42');
  });

  it('should return current dateTime as string with custom format', () => {
    const customTemplate = 'YYYY/MM/DD HH:mm:ss';
    const mockDateObject = new Date('2021-02-26T22:42:16.652Z');
    vi.spyOn(globalThis, 'Date').mockImplementation(() => mockDateObject);

    expect(getCurrentDateTime(customTemplate)).toBe('2021/02/26 22:42:16');
  });
});
