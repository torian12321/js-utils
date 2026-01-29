import { describe, expect, it } from 'vitest';

import { toCamelCase } from './toCamelCase';

describe('stringUtils/toCamelCase', () => {
  it('Should return empty string when no text is provided', () => {
    expect(toCamelCase()).toBe('');
  });

  describe('From camelCase', () => {
    it('Should return the original string when it is already in camelCase', () => {
      expect(toCamelCase('lorem_ipsum_dolor_sit_amet')).toBe(
        'loremIpsumDolorSitAmet',
      );
    });
  });
  describe('From kebab-case', () => {
    it('Should replace "-" to "_"', () => {
      expect(toCamelCase('lorem-ipsum-dolor-sit-amet')).toBe(
        'loremIpsumDolorSitAmet',
      );
    });
    it('Should lowercase all letters and replace "-" to "_"', () => {
      expect(toCamelCase('Lorem-Ipsum-Dolor-Sit-Amet')).toBe(
        'loremIpsumDolorSitAmet',
      );
    });
  });
  describe('From pascalCase', () => {
    it('Should lowercase all letters and replace " " to "_"', () => {
      expect(toCamelCase('LoremIpsumDolorSitAmet')).toBe(
        'loremIpsumDolorSitAmet',
      );
    });
    it('should replace uppercase letters with lowercase letters and "_"', () => {
      expect(toCamelCase('LoremIpsumABC')).toBe('loremIpsumABC');
    });
  });
  describe('From snake_case', () => {
    it('Should return camelCase', () => {
      expect(toCamelCase('lorem_ipsum_dolor_sit_amet')).toBe(
        'loremIpsumDolorSitAmet',
      );
    });
  });
  describe('From spaceCase', () => {
    it('Should replace " " to "_"', () => {
      expect(toCamelCase('lorem ipsum dolor sit amet')).toBe(
        'loremIpsumDolorSitAmet',
      );
    });
    it('Should lowercase all letters and replace " " to "_"', () => {
      expect(toCamelCase('Lorem Ipsum Dolor Sit Amet')).toBe(
        'loremIpsumDolorSitAmet',
      );
    });
    it('Should lowercase all letters and replace " " to "_" when it contains whitespace', () => {
      expect(toCamelCase('  lorem ipsum dolor sit amet  ')).toBe(
        'loremIpsumDolorSitAmet',
      );
    });
    it('Should lowercase all letters and replace " " to "_"', () => {
      expect(toCamelCase('lorem ipsum ABC')).toBe('loremIpsumABC');
    });
  });

  describe('From combined case', () => {
    it('Should lowercase all letters and replace " " to "_"', () => {
      expect(toCamelCase('Lorem-Ipsum Dolor SitAmet')).toBe(
        'loremIpsumDolorSitAmet',
      );
    });
  });
  describe('When the string contains all uppercase letters', () => {
    it('Should lowercase all letters and replace " " to "_"', () => {
      expect(toCamelCase('LOREM IPSUM DOLOR SIT AMET')).toBe(
        'loremIpsumDolorSitAmet',
      );
    });
  });
});
