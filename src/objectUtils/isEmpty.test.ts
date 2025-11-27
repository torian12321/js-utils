import { describe, expect, it } from 'vitest';

import { emptyObj, userObj1 } from 'src/__mock';

import { isEmpty } from './isEmpty';

describe('objectUtils/isEmpty', () => {
  it('Should return `false` when passing an object with content', () => {
    expect(isEmpty(userObj1)).toBe(false);
  });

  it('Should return `true` when passing an object with no content', () => {
    expect(isEmpty(emptyObj)).toBe(true);
  });

  it('Should return `true` when passing an object with only inherited properties', () => {
    // Create an object that inherits enumerable properties
    const parent = { inheritedProp: 'value' };
    const child = Object.create(parent);
    // Object.hasOwn will return false for inheritedProp, but true for empty object
    expect(isEmpty(child)).toBe(true);
  });
});
