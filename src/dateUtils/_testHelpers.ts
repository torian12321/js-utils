import { vi } from 'vitest';

/**
 * Creates and stubs a mock Date constructor that always returns the specified date object.
 * This is useful for testing date-related functions with consistent, predictable dates.
 *
 * @param dateString - ISO date string (e.g., '2021-02-26T22:42:16.652Z')
 * @returns The stubbed Date constructor
 *
 * @example
 * ```ts
 * const mockDate = mockDateGlobal('2021-02-26T22:42:16.652Z');
 * // Now new Date() will always return the mocked date
 * ```
 */
export const mockDateGlobal = (dateString: string): typeof Date => {
  const mockDateObject = new Date(dateString);
  const MockDate = function (this: Date) {
    if (this instanceof MockDate) {
      return mockDateObject;
    }
    return mockDateObject;
  } as unknown as typeof Date;
  Object.setPrototypeOf(MockDate, Date);
  Object.setPrototypeOf(MockDate.prototype, Date.prototype);
  vi.stubGlobal('Date', MockDate);

  return MockDate;
};
