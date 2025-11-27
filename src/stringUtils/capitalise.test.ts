import { describe, expect, it } from 'vitest';

import { capitalise } from './capitalise';

describe('stringUtils/capitalise', () => {
  it('Should return empty string when no text is provided', () => {
    expect(capitalise()).toBe('');
  });
  it('Should capitalise first letter of each word', () => {
    expect(capitalise('lorem ipsum dolor sit amet')).toBe(
      'Lorem Ipsum Dolor Sit Amet',
    );
  });

  it('Should capitalise first letter of each word, but keep the rest as they are', () => {
    expect(capitalise('LOREM IPSUM DOLOR SIT AMET')).toBe(
      'LOREM IPSUM DOLOR SIT AMET',
    );
  });

  it('Should return the same string when it is empty or only contains whitespace', () => {
    expect(capitalise('   ')).toBe('   ');
  });
});
