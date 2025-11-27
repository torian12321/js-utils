import { describe, expect, it } from 'vitest';

import { emptyObj, userObj1 } from 'src/__mock';

import { isError } from './isError';

describe('typeChecker/isError', () => {
  it('should return `true` for errors', () => {
    expect(isError(new Error())).toBe(true);
    expect(isError(new Error('foo'))).toBe(true);
  });

  it('should return `false` for non-errors', () => {
    expect(isError(null)).toBe(false);
    expect(isError(undefined)).toBe(false);

    expect(isError('some valid text')).toBe(false);
    expect(isError(12345)).toBe(false);
    expect(isError(userObj1)).toBe(false);
    expect(isError(emptyObj)).toBe(false);

    expect(isError(Function)).toBe(false);
    expect(isError(new Date())).toBe(false);
  });
});
