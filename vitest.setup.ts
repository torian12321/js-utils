import { afterEach, beforeEach } from 'vitest';

let originalDate: typeof globalThis.Date;

beforeEach(() => {
  // Store original Date
  originalDate = globalThis.Date;
  // Mock Date to return consistent values regardless of timezone
  const mockDate = class extends Date {
    getTimezoneOffset() {
      return -60; // UTC+1 offset in minutes
    }
    toISOString() {
      return originalDate.prototype.toISOString.call(this);
    }
    getUTCFullYear() {
      return originalDate.prototype.getUTCFullYear.call(this);
    }
    getUTCMonth() {
      return originalDate.prototype.getUTCMonth.call(this);
    }
    getUTCDate() {
      return originalDate.prototype.getUTCDate.call(this);
    }
  };
  globalThis.Date = mockDate as unknown as typeof Date;
});

afterEach(() => {
  // Restore the original Date object
  globalThis.Date = originalDate;
});
