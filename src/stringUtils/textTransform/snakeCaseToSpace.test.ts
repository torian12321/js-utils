import { describe, expect, it } from 'vitest';

import { snakeCaseToSpace } from './snakeCaseToSpace';

describe('stringUtils/snakeCaseToSpace', () => {
  it('Should return empty string when no text is provided', () => {
    expect(snakeCaseToSpace()).toBe('');
  });
  it('Should replace "_" to " "', () => {
    expect(snakeCaseToSpace('lorem_ipsum_dolor_sit_amet')).toBe(
      'lorem ipsum dolor sit amet',
    );
  });
  it('Should replace "_" to " " and keep uppercased letters', () => {
    expect(snakeCaseToSpace('Lorem_Ipsum_Dolor_Sit_Amet')).toBe(
      'Lorem Ipsum Dolor Sit Amet',
    );
  });
});
