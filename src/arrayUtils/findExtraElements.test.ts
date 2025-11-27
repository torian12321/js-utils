import { describe, expect, it } from 'vitest';

import { findExtraElements } from './findExtraElements';

describe('arrayUtils/findExtraElements', () => {
  it('should return all extra elements from arr1 not in arr2', () => {
    const arr1 = ['a', 'b', 'c', 'd'];
    const arr2 = ['a', 'b'];
    const expected = ['c', 'd'];
    expect(findExtraElements(arr1, arr2)).toEqual(expected);
  });

  it('should return an empty array when arr1 is completely contained in arr2', () => {
    const arr1 = ['a', 'b'];
    const arr2 = ['a', 'b', 'c'];
    const expected: string[] = [];
    expect(findExtraElements(arr1, arr2)).toEqual(expected);
  });

  it('should return an empty array when arr1 is empty', () => {
    const arr1: string[] = [];
    const arr2 = ['a', 'b'];
    expect(findExtraElements(arr1, arr2)).toEqual([]);
  });

  it('should return arr1 when arr2 is empty', () => {
    const arr1: string[] = ['a', 'b'];
    const arr2: string[] = [];
    const expected = ['a', 'b'];
    expect(findExtraElements(arr1, arr2)).toEqual(expected);
  });

  it('should treat string cases sensitively', () => {
    const arr1 = ['a', 'A'];
    const arr2 = ['a'];
    const expected = ['A'];
    expect(findExtraElements(arr1, arr2)).toEqual(expected);
  });

  it('should return an empty array when both arrays are empty', () => {
    const arr1: string[] = [];
    const arr2: string[] = [];
    expect(findExtraElements(arr1, arr2)).toEqual([]);
  });

  it('should return all extra elements from arr1 not in arr2, arr3, and arr4', () => {
    const arr1 = ['a', 'b', 'c', 'd', 'e'];
    const arr2 = ['a'];
    const arr3 = ['b'];
    const arr4 = ['c'];
    const expected = ['d', 'e'];
    expect(findExtraElements(arr1, arr2, arr3, arr4)).toEqual(expected);
  });
});
