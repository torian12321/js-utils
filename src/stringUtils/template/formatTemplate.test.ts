import { describe, expect, it } from 'vitest';

import { formatTemplate } from './formatTemplate';

describe('stringUtils/formatTemplate', () => {
  it('should return a template function', () => {
    const template = formatTemplate`Hello ${0}. Welcome to ${1}.`;
    expect(template('James', 'China')).toBe('Hello James. Welcome to China.');
  });

  it('should return a template function with missing values and an empty string', () => {
    const template = formatTemplate`Hello ${0}. Welcome to ${1}.`;
    expect(template('James')).toBe('Hello James. Welcome to .');
  });
});
