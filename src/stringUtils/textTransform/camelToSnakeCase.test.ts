import { describe, expect, it } from 'vitest';

import { camelToSnakeCase } from './camelToSnakeCase';

describe('stringUtils/camelToSnakeCase', () => {
  it('Should return empty string when no text is provided', () => {
    expect(camelToSnakeCase()).toBe('');
  });
  it('Should lowercase all leters and add _ before each prevoious uppdercase', () => {
    expect(camelToSnakeCase('loremIpsum')).toBe('lorem_ipsum');
  });
});
