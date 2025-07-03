import { describe, expect, it } from 'vitest';

import { emptyObj, userObj1 } from '../__mock';
import { isEmpty } from './isEmpty';

describe('objectUtils/isEmpty', () => {
  it('Should return `false` when passing an object with content', () => {
    expect(isEmpty(userObj1)).toBe(false);
  });

  it('Should return `true` when passing an object with no content', () => {
    expect(isEmpty(emptyObj)).toBe(true);
  });
});
