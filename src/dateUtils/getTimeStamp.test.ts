import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { getTimeStamp } from './getTimeStamp';

describe('dateUtils/getTimeStamp', () => {
  const mockDate = new Date('2023-06-15T14:30:00.000Z');

  beforeEach(() => {
    // Mock Date to return a fixed timestamp
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('should return the current timestamp in UTC format', () => {
    const result = getTimeStamp();
    // Returns the mocked time in UTC ISO 8601 format
    expect(result).toBe('2023-06-15T14:30:00Z');
  });

  it('should return the timestamp in ISO 8601 format', () => {
    const result = getTimeStamp();
    // Check that it matches ISO 8601 format
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/);
  });

  it('should return consistent timestamp when called multiple times', () => {
    const result1 = getTimeStamp();
    const result2 = getTimeStamp();
    expect(result1).toBe(result2);
  });
});
