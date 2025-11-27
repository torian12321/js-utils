import { describe, expect, it } from 'vitest';

import { userObj1 } from 'src/__mock';

import { cleanObject } from './cleanObject';

describe('objectUtils/cleanObject', () => {
  it('should handle an object without any values to clean', () => {
    expect(cleanObject(userObj1)).toStrictEqual({
      eyeColor: 'blue',
      firstName: 'John',
      lastName: 'Doe',
    });
  });

  it('should handle an empty object', () => {
    expect(cleanObject({})).toEqual({});
  });

  describe('should remove properties for objects', () => {
    it('with undefined values', () => {
      const obj = { name: 'Alice', age: undefined };
      expect(cleanObject(obj)).toEqual({ name: 'Alice' });
    });

    it('with null values', () => {
      const obj = { name: 'Alice', age: null };
      expect(cleanObject(obj)).toEqual({ name: 'Alice' });
    });

    it('with empty string values', () => {
      const obj = { name: 'Alice', age: '' };
      expect(cleanObject(obj)).toEqual({ name: 'Alice' });
    });

    it('with strings consisting only of spaces', () => {
      const obj = { name: 'Alice', age: '   ' };
      expect(cleanObject(obj)).toEqual({ name: 'Alice' });
    });
  });
});
