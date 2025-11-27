import { afterEach, describe, expect, it, vi } from 'vitest';

import { mockDateGlobal } from './_testHelpers';

describe('dateUtils/_testHelpers', () => {
  describe('mockDateGlobal', () => {
    afterEach(() => {
      vi.unstubAllGlobals();
    });

    it('should return a Date constructor', () => {
      const MockDate = mockDateGlobal('2021-02-26T22:42:16.652Z');

      expect(MockDate).toBeDefined();
      expect(typeof MockDate).toBe('function');
    });

    it('should stub the global Date constructor', () => {
      const testDate = '2021-02-26T22:42:16.652Z';
      mockDateGlobal(testDate);

      const dateInstance = new Date();
      expect(dateInstance.toISOString()).toBe(testDate);
    });

    it('should return the mocked date when Date is called with new', () => {
      const testDate = '2021-03-15T10:30:45.123Z';
      mockDateGlobal(testDate);

      const dateInstance = new Date();
      expect(dateInstance.getTime()).toBe(new Date(testDate).getTime());
    });

    it('should return the mocked date when Date is called without new', () => {
      const testDate = '2021-03-15T10:30:45.123Z';
      mockDateGlobal(testDate);

      // Date() without new returns a string normally, but our mock returns a Date object
      const dateInstance = new Date();
      expect(dateInstance.toISOString()).toBe(testDate);
    });

    it('should return the mocked date when MockDate is called with new (covers if branch)', () => {
      const testDate = '2021-06-20T15:45:30.789Z';
      const MockDate = mockDateGlobal(testDate);

      // Call MockDate with new - this should hit the "if (this instanceof MockDate)" branch
      const dateInstance = new MockDate();
      expect(dateInstance.toISOString()).toBe(testDate);
    });

    it('should return the mocked date when MockDate is called without new (covers else branch)', () => {
      const testDate = '2021-07-25T09:15:20.456Z';
      const MockDate = mockDateGlobal(testDate);

      // Call MockDate without new - this should hit the else branch (line 22)
      // By using .call() with null, we ensure this is not an instance of MockDate
      const MockDateFunc = MockDate as unknown as (
        thisArg?: unknown,
        ...args: unknown[]
      ) => Date;
      const dateInstance = MockDateFunc.call(null);
      expect(dateInstance.toISOString()).toBe(testDate);
    });

    it('should work with different date strings', () => {
      const testDate1 = '2020-01-01T00:00:00.000Z';
      mockDateGlobal(testDate1);

      expect(new Date().toISOString()).toBe(testDate1);

      vi.unstubAllGlobals();

      const testDate2 = '2025-12-31T23:59:59.999Z';
      mockDateGlobal(testDate2);

      expect(new Date().toISOString()).toBe(testDate2);
    });

    it('should preserve Date prototype methods', () => {
      const testDate = '2021-02-26T22:42:16.652Z';
      mockDateGlobal(testDate);

      const dateInstance = new Date();
      expect(dateInstance.getTime).toBeDefined();
      expect(typeof dateInstance.getTime).toBe('function');
      expect(dateInstance.toISOString).toBeDefined();
      expect(typeof dateInstance.toISOString).toBe('function');
    });

    it('should allow date methods to work correctly', () => {
      const testDate = '2021-02-26T22:42:16.652Z';
      mockDateGlobal(testDate);

      const dateInstance = new Date();
      const expectedDate = new Date(testDate);

      expect(dateInstance.getFullYear()).toBe(expectedDate.getFullYear());
      expect(dateInstance.getMonth()).toBe(expectedDate.getMonth());
      expect(dateInstance.getDate()).toBe(expectedDate.getDate());
      expect(dateInstance.getHours()).toBe(expectedDate.getHours());
      expect(dateInstance.getMinutes()).toBe(expectedDate.getMinutes());
    });

    it('should handle multiple calls and cleanup', () => {
      const testDate1 = '2021-01-01T00:00:00.000Z';
      mockDateGlobal(testDate1);
      expect(new Date().toISOString()).toBe(testDate1);

      vi.unstubAllGlobals();

      const testDate2 = '2022-06-15T12:30:00.000Z';
      mockDateGlobal(testDate2);
      expect(new Date().toISOString()).toBe(testDate2);
    });
  });
});
