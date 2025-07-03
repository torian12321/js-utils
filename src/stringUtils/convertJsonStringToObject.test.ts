import { describe, expect, it } from 'vitest';

import { convertJsonStringToObject } from './convertJsonStringToObject';

describe('stringUtils/convertJsonStringToObject', () => {
  it('should convert a valid JSON `string` to an `object`', () => {
    expect(
      convertJsonStringToObject('{"result":true, "count":42}'),
    ).toStrictEqual({
      count: 42,
      result: true,
    });
  });

  it('should return `null` for an invalid JSON string', () => {
    const jsonString = '{"name": "John", "age": 30'; // Mssing closing brace
    expect(convertJsonStringToObject(jsonString)).toBeNull();
  });

  it('should return `null` for non-convertable values', () => {
    expect(convertJsonStringToObject('invalid JSON format')).toBeNull();
  });
});
