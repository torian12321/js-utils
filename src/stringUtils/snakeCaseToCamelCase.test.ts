import { describe, expect, it } from 'vitest';

import { snakeCaseToCamelCase } from './snakeCaseToCamelCase';

describe('stringUtils/snakeCaseToCamelCase', () => {
  it('Should return empty string when no text is provided', () => {
    expect(snakeCaseToCamelCase()).toBe('');
  });
  it('Should replace "_" to camelCase', () => {
    expect(snakeCaseToCamelCase('lorem_ipsum_dolor_sit_amet')).toBe(
      'loremIpsumDolorSitAmet',
    );
  });

  it('Should replace "_" to camelCase and keep first letter uppercase', () => {
    expect(snakeCaseToCamelCase('_lorem_ipsum_dolor_sit_amet')).toBe(
      'LoremIpsumDolorSitAmet',
    );
  });
});
