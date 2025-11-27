import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { mockDateGlobal } from './_testHelpers';
import { configureDateFormats } from './dateFormatManager';
import { getCurrentDateTime } from './getCurrentDateTime';

describe('dateUtils/getCurrentDateTime', () => {
  beforeEach(() => {
    configureDateFormats({
      dateTimeFormat: 'MM/DD/YYYY HH:mm',
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should return current dateTime as string', () => {
    mockDateGlobal('2021-02-26T22:42:16.652Z');

    expect(getCurrentDateTime()).toBe('02/26/2021 22:42');
  });

  it('should return current dateTime as string with custom format', () => {
    const customTemplate = 'YYYY/MM/DD HH:mm:ss';
    mockDateGlobal('2021-02-26T22:42:16.652Z');

    expect(getCurrentDateTime(customTemplate)).toBe('2021/02/26 22:42:16');
  });
});
