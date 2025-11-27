import { describe, expect, it } from 'vitest';

import { emptyObj, userObj1 } from 'src/__mock';

import { isObject } from './isObject';

describe('typeChecker/isObject', () => {
  it('should return `true` for objects', () => {
    expect(isObject(userObj1)).toBe(true);
    expect(isObject(emptyObj)).toBe(true);
  });

  it('should return `false` for non-objects', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);

    expect(isObject('some valid text')).toBe(false);
    expect(isObject(12345)).toBe(false);

    expect(isObject(Function)).toBe(false);
    expect(isObject(new Date())).toBe(false);
    expect(isObject(new Error())).toBe(false);
  });
});
