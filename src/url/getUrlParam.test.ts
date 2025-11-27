import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { getUrlParam } from './getUrlParam';

describe('url/getUrlParam', () => {
  const mockWindow = {
    location: {
      href: 'https://example.com?param1=value1&param2=value2&empty=',
    },
  };

  beforeEach(() => {
    // Mock the global object
    vi.stubGlobal('window', mockWindow);
  });

  afterEach(() => {
    // Clean up the mock
    vi.unstubAllGlobals();
  });

  it('should return the value of an existing parameter', () => {
    expect(getUrlParam('param1')).toBe('value1');
    expect(getUrlParam('param2')).toBe('value2');
  });

  it('should return null for a non-existent parameter', () => {
    expect(getUrlParam('nonexistent')).toBeNull();
  });

  it('should return an empty string for a parameter without a value', () => {
    expect(getUrlParam('empty')).toBe('');
  });

  it('should handle URL encoded parameters', () => {
    vi.stubGlobal('window', {
      location: {
        href: 'https://example.com?encoded=hello%20world',
      },
    });
    expect(getUrlParam('encoded')).toBe('hello world');
  });
});
