import { describe, expect, it } from 'vitest';

import { toSnakeCase } from './toSnakeCase';

describe('stringUtils/toSnakeCase', () => {
  it('Should return empty string when no text is provided', () => {
    expect(toSnakeCase()).toBe('');
  });

  describe('From camelCase', () => {
    it('Should lowercase all letters and replace " " to "_"', () => {
      expect(toSnakeCase('loremIpsumDolorSitAmet')).toBe(
        'lorem_ipsum_dolor_sit_amet',
      );
    });
    it('should replace uppercase letters with lowercase letters and "_"', () => {
      expect(toSnakeCase('loremIpsumABC')).toBe('lorem_ipsum_abc');
    });
  });
  describe('From kebab-case', () => {
    it('Should replace "-" to "_"', () => {
      expect(toSnakeCase('lorem-ipsum-dolor-sit-amet')).toBe(
        'lorem_ipsum_dolor_sit_amet',
      );
    });
    it('Should lowercase all letters and replace "-" to "_"', () => {
      expect(toSnakeCase('Lorem-Ipsum-Dolor-Sit-Amet')).toBe(
        'lorem_ipsum_dolor_sit_amet',
      );
    });
  });
  describe('From pascalCase', () => {
    it('Should lowercase all letters and replace " " to "_"', () => {
      expect(toSnakeCase('LoremIpsumDolorSitAmet')).toBe(
        'lorem_ipsum_dolor_sit_amet',
      );
    });
    it('should replace uppercase letters with lowercase letters and "_"', () => {
      expect(toSnakeCase('LoremIpsumABC')).toBe('lorem_ipsum_abc');
    });
  });
  describe('From spaceCase', () => {
    it('Should replace " " to "_"', () => {
      expect(toSnakeCase('lorem ipsum dolor sit amet')).toBe(
        'lorem_ipsum_dolor_sit_amet',
      );
    });
    it('Should lowercase all letters and replace " " to "_"', () => {
      expect(toSnakeCase('Lorem Ipsum Dolor Sit Amet')).toBe(
        'lorem_ipsum_dolor_sit_amet',
      );
    });
    it('Should lowercase all letters and replace " " to "_" when it contains whitespace', () => {
      expect(toSnakeCase('  lorem ipsum dolor sit amet  ')).toBe(
        'lorem_ipsum_dolor_sit_amet',
      );
    });
    it('Should lowercase all letters and replace " " to "_"', () => {
      expect(toSnakeCase('lorem ipsum ABC')).toBe('lorem_ipsum_abc');
    });
  });

  describe('From combined case', () => {
    it('Should lowercase all letters and replace " " to "_"', () => {
      expect(toSnakeCase('Lorem-Ipsum Dolor SitAmet')).toBe(
        'lorem_ipsum_dolor_sit_amet',
      );
    });
  });
  describe('When the string contains all uppercase letters', () => {
    it('Should lowercase all letters and replace " " to "_"', () => {
      expect(toSnakeCase('LOREM IPSUM DOLOR SIT AMET')).toBe(
        'lorem_ipsum_dolor_sit_amet',
      );
    });
  });
});
