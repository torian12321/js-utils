import { describe, expect, it } from 'vitest';

import { capitaliseFirstLetter } from './capitaliseFirstLetter';

describe('stringUtils/capitaliseFirstLetter', () => {
  it('Should return empty string when no text is provided', () => {
    expect(capitaliseFirstLetter()).toBe('');
  });
  it('Should capitalise first letter of each word', () => {
    expect(capitaliseFirstLetter('lorem ipsum')).toBe('Lorem Ipsum');
  });

  it('Should capitalise first letter of each word and lowercase the others', () => {
    expect(capitaliseFirstLetter('LOREM IPSUM')).toBe('Lorem Ipsum');
  });
});
