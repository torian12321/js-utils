import { describe, expect, it } from 'vitest';

import { greet } from './greet';

describe('basic/greet', () => {
  it('should return generic greeting', () => {
    expect(greet()).toBe('Hello! Welcome to the example project.');
  });

  it('should return greeting with name', () => {
    expect(greet('John')).toBe('Hello John! Welcome to the example project.');
  });
});
