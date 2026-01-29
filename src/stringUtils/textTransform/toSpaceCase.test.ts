import { describe, expect, it } from 'vitest';

import { toSpaceCase } from './toSpaceCase';

describe('stringUtils/toSpaceCase', () => {
  it('Should return empty string when no text is provided', () => {
    expect(toSpaceCase()).toBe('');
  });

  describe('From camelCase', () => {
    it('Should return the original string', () => {
      expect(toSpaceCase('loremIpsumDolorSitAmet')).toBe(
        'lorem ipsum dolor sit amet',
      );
    });
  });
  describe('From kebab-case', () => {
    it('Should replace "-" to "_"', () => {
      expect(toSpaceCase('lorem-ipsum-dolor-sit-amet')).toBe(
        'lorem ipsum dolor sit amet',
      );
    });
    it('Should keep the original case', () => {
      expect(toSpaceCase('Lorem-Ipsum-Dolor-Sit-Amet')).toBe(
        'lorem Ipsum Dolor Sit Amet',
      );
    });
  });
  describe('From pascalCase', () => {
    it('Should return the original string', () => {
      expect(toSpaceCase('LoremIpsumDolorSitAmet')).toBe(
        'lorem ipsum dolor sit amet',
      );
    });
    it('should replace uppercase letters with lowercase letters and "_"', () => {
      expect(toSpaceCase('LoremIpsumABC')).toBe('lorem ipsum ABC');
    });
  });
  describe('From snake_case', () => {
    it('Should return space case', () => {
      expect(toSpaceCase('lorem_ipsum_dolor_sit_amet')).toBe(
        'lorem ipsum dolor sit amet',
      );
    });
  });

  describe('From combined case', () => {
    it('Should lowercase all letters and replace " " to "_"', () => {
      expect(toSpaceCase('Lorem-Ipsum Dolor SitAmet')).toBe(
        'Lorem Ipsum Dolor SitAmet',
      );
    });
  });
  describe('When the string contains all uppercase letters', () => {
    it('Should lowercase all letters and replace " " to "_"', () => {
      expect(toSpaceCase('LOREM IPSUM DOLOR SIT AMET')).toBe(
        'lorem ipsum dolor sit amet',
      );
    });
  });
});
