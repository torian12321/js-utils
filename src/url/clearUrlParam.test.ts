import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { clearUrlParam } from './clearUrlParam';

describe('url/clearUrlParam', () => {
  beforeEach(() => {
    // Mock the entire window object
    vi.stubGlobal('window', {
      location: {
        href: 'https://example.com?param1=value1&param2=value2',
      },
      history: {
        pushState: vi.fn(),
      },
    });
  });

  afterEach(() => {
    // Clear all mocks after each test
    vi.unstubAllGlobals();
  });

  it('should remove the specified parameter from the URL', () => {
    clearUrlParam('param1');

    expect(window.history.pushState).toHaveBeenCalledWith(
      {},
      '',
      'https://example.com/?param2=value2',
    );
  });

  it('should not modify the URL if the parameter does not exist', () => {
    clearUrlParam('nonexistent');

    expect(window.history.pushState).toHaveBeenCalledWith(
      {},
      '',
      'https://example.com/?param1=value1&param2=value2',
    );
  });

  it('should remove the only parameter and leave a clean URL', () => {
    vi.stubGlobal('window', {
      location: {
        href: 'https://example.com?param1=value1',
      },
      history: {
        pushState: vi.fn(),
      },
    });

    clearUrlParam('param1');

    expect(window.history.pushState).toHaveBeenCalledWith(
      {},
      '',
      'https://example.com/',
    );
  });
});
