import { isObject } from '../index';

test('isObject - string', () => {
  expect(isObject('test')).toBe(false);
});

test('isObject - valid object', () => {
  expect(
    isObject({
      a: 1,
      b: 'test',
    }),
  ).toBe(true);
});

test('isObject - empty object', () => {
  expect(isObject({})).toBe(true);
});

test('isObject - null', () => {
  expect(isObject(null)).toBe(false);
});
