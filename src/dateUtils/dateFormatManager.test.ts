import { beforeEach, describe, expect, it } from 'vitest';

import {
  configureDateFormats,
  getDateFormat,
  getDateTimeFormat,
  getTimeFormat,
} from './dateFormatManager';

describe('dateUtils/dateFormatManager', () => {
  // Reset to default values before each test
  beforeEach(() => {
    configureDateFormats({
      dateFormat: 'YYYY-MM-DD',
      timeFormat: 'HH:mm:ss',
      dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    });
  });

  it('should return default formats when no configuration is provided', () => {
    expect(getDateFormat()).toBe('YYYY-MM-DD');
    expect(getTimeFormat()).toBe('HH:mm:ss');
    expect(getDateTimeFormat()).toBe('YYYY-MM-DD HH:mm:ss');
  });

  it('should update formats when new configuration is provided', () => {
    configureDateFormats({
      dateFormat: 'DD/MM/YYYY',
      timeFormat: 'HH:mm',
    });

    expect(getDateFormat()).toBe('DD/MM/YYYY');
    expect(getTimeFormat()).toBe('HH:mm');
    expect(getDateTimeFormat()).toBe('DD/MM/YYYY HH:mm');
  });

  it('should allow partial configuration updates', () => {
    configureDateFormats({
      dateFormat: 'MM/DD/YY',
    });

    expect(getDateFormat()).toBe('MM/DD/YY');
    expect(getTimeFormat()).toBe('HH:mm:ss'); // Should remain unchanged
    expect(getDateTimeFormat()).toBe('MM/DD/YY HH:mm:ss');
  });

  it('should allow custom datetime format independent of date and time formats', () => {
    configureDateFormats({
      dateTimeFormat: 'YYYY-MM-DD@HH:mm:ss',
    });

    expect(getDateFormat()).toBe('YYYY-MM-DD'); // Should remain unchanged
    expect(getTimeFormat()).toBe('HH:mm:ss'); // Should remain unchanged
    expect(getDateTimeFormat()).toBe('YYYY-MM-DD@HH:mm:ss');
  });
});
