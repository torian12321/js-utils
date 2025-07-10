import { resolve } from 'path';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      enabled: true,
      reporter: ['text', 'html'],
      include: ['src/**'],
      exclude: ['**/index.ts'],
      thresholds: {
        /** Percentage of coverage test required */
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
    globals: true,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@torian12321/js-utils',
      fileName: 'js-utils',
    },
  },
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
});
