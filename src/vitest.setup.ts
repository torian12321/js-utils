import { afterEach, beforeEach, vi } from 'vitest';

let originalDate: typeof global.Date;

beforeEach(() => {
  // Store original Date
  originalDate = global.Date;
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
  vi.stubGlobal('Date', mockDate);
});

afterEach(() => {
  // Restore the original Date object
  vi.unstubAllGlobals();
});
