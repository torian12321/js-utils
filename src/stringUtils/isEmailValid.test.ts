import { describe, expect, it } from 'vitest';

import { isEmailValid } from './isEmailValid';

describe('stringUtils/isEmailValid', () => {
  it('should return `true` for a valid email', () => {
    expect(isEmailValid('test@example.com')).toBe(true);
  });

  it('should return `false` for an invalid email', () => {
    expect(isEmailValid('invalid-email')).toBe(false);
  });
});
