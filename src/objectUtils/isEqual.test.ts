import { describe, expect, it } from 'vitest';

import { emptyObj, userObj1 } from 'src/__mock';

import { isEqual } from './isEqual';

describe('objectUtils/isEqual', () => {
  it('Should return `true`', () => {
    expect(isEqual({}, {})).toBe(true);
    expect(isEqual(emptyObj, {})).toBe(true);
    expect(isEqual(userObj1, userObj1)).toBe(true);
  });

  it('Should return `false`', () => {
    expect(isEqual(emptyObj, null)).toBe(false);
    expect(isEqual(userObj1, { ...userObj1, additionaProperty: 10 })).toBe(
      false,
    );

    // Objects with different keys
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, c: 2 };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  it('Should compare nested objects correctly', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
    };

    const obj2 = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
    };

    const obj3 = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 4, // Different value
        },
      },
    };

    expect(isEqual(obj1, obj2)).toBe(true);
    expect(isEqual(obj1, obj3)).toBe(false);
  });
});
