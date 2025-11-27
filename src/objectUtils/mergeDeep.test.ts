import { describe, expect, it } from 'vitest';

import { userObj1, userObj2 } from 'src/__mock';

import { mergeDeep } from './mergeDeep';

describe('objectUtils/mergeDeep', () => {
  it('Should retur original object when combined with empty object', () => {
    expect(mergeDeep(userObj1, {})).toStrictEqual(userObj1);
  });

  it('Should combine objects', () => {
    expect(mergeDeep(userObj1, userObj2)).toStrictEqual({
      age: 20,
      eyeColor: 'blue',
      firstName: 'David',
      lastName: 'Doe',
    });
  });

  it('Should combine arrays inside objects', () => {
    expect(
      mergeDeep(
        { ...userObj1, valArr: [11] },
        { ...userObj2, valArr: [22, 33] },
      ),
    ).toStrictEqual({
      age: 20,
      eyeColor: 'blue',
      firstName: 'David',
      lastName: 'Doe',
      valArr: [11, 22, 33],
    });
  });

  it('Should combine nested objects', () => {
    expect(
      mergeDeep(
        { ...userObj1, subObj: { name: 'Carl' } },
        { ...userObj2, subObj: { surname: 'Smith' } },
      ),
    ).toStrictEqual({
      age: 20,
      eyeColor: 'blue',
      firstName: 'David',
      lastName: 'Doe',
      subObj: {
        name: 'Carl',
        surname: 'Smith',
      },
    });
  });
});
