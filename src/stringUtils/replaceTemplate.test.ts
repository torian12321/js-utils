import { describe, expect, it, vi } from 'vitest';

import { replaceTemplate } from './replaceTemplate';

describe('stringUtils/replaceTemplate', () => {
  it('should handle an empty template string', () => {
    const result = replaceTemplate('');
    expect(result).toBe('');
  });

  it('should return the original string if no variables are present', () => {
    const template = 'This is a plain string.';

    const result = replaceTemplate(template);
    expect(result).toBe('This is a plain string.');
  });

  it('should replace template variables with provided values', () => {
    const template = 'Hello, ${name}! Welcome to ${place}.';
    const values = { name: 'John', place: 'Paris' };

    const result = replaceTemplate(template, values);
    expect(result).toBe('Hello, John! Welcome to Paris.');
  });

  it('should handle multiple occurrences of the same variable', () => {
    const template = '${greeting}, ${name}! ${greeting} again, ${name}!';
    const values = { greeting: 'Hello', name: 'Alice' };

    const result = replaceTemplate(template, values);
    expect(result).toBe('Hello, Alice! Hello again, Alice!');
  });

  it('should leave unmatched variables empty, and log a warning', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(vi.fn());
    const template = 'Hi, ${name}! Your age is ${age}.';
    const values = { name: 'Bob' };

    const result = replaceTemplate(template, values);
    expect(result).toBe('Hi, Bob! Your age is .');
    expect(consoleSpy).toHaveBeenCalledWith(
      'Warning: Unmatched variable "age" in template',
    );
  });

  describe('With options', () => {
    it('should trim spaces by default', () => {
      const template = ' Hello ${name}  ';
      const values = { name: 'John' };

      const result = replaceTemplate(template, values);
      expect(result).toBe('Hello John');
    });
    it('should not trim spaces if trimSpaces is `false`', () => {
      const template = ' Hello ${name}  ';
      const values = { name: 'John' };

      const result = replaceTemplate(template, values, {
        trimSpaces: false,
      });
      expect(result).toBe(' Hello John  ');
    });

    it('should remove indicated leading and trailing characters', () => {
      const template = 'Hello ${name}, ${surname}';
      const values = { name: 'John' };
      const result = replaceTemplate(template, values, {
        removeSideChars: [','],
      });
      expect(result).toBe('Hello John');
    });
  });
});
