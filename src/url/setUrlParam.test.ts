import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { setUrlParam } from './setUrlParam';

describe('url/setUrlParam', () => {
  const mockWindow = {
    location: {
      href: 'https://example.com?existingParam=oldValue',
    },
    history: {
      pushState: vi.fn(),
    },
  };

  beforeEach(() => {
    // Mock the global object
    vi.stubGlobal('window', mockWindow);
  });

  afterEach(() => {
    // Clean up the mock
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it('should add a new parameter to the URL', () => {
    setUrlParam('newParam', 'newValue');

    expect(window.history.pushState).toHaveBeenCalledWith(
      {},
      '',
      'https://example.com/?existingParam=oldValue&newParam=newValue',
    );
  });

  it('should update an existing parameter in the URL', () => {
    setUrlParam('existingParam', 'newValue');

    expect(window.history.pushState).toHaveBeenCalledWith(
      {},
      '',
      'https://example.com/?existingParam=newValue',
    );
  });

  it('should handle URL encoded values', () => {
    setUrlParam('param', 'hello world');

    expect(window.history.pushState).toHaveBeenCalledWith(
      {},
      '',
      'https://example.com/?existingParam=oldValue&param=hello%2520world',
    );
  });

  it('should handle empty string values', () => {
    setUrlParam('emptyParam', '');

    expect(window.history.pushState).toHaveBeenCalledWith(
      {},
      '',
      'https://example.com/?existingParam=oldValue&emptyParam=',
    );
  });
});
