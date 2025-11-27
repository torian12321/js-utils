import { resolve } from 'path';

import { visualizer } from 'rollup-plugin-visualizer';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      name: '@torian/js-utils',
      formats: ['es', 'cjs'],
      entry: {
        'js-utils': resolve(__dirname, 'src/index.ts'),
        array: resolve(__dirname, 'src/arrayUtils/index.ts'),
        date: resolve(__dirname, 'src/dateUtils/index.ts'),
        object: resolve(__dirname, 'src/objectUtils/index.ts'),
        string: resolve(__dirname, 'src/stringUtils/index.ts'),
        typeChecker: resolve(__dirname, 'src/typeChecker/index.ts'),
        url: resolve(__dirname, 'src/url/index.ts'),
      },
    },
  },
  resolve: {
    alias: [{ find: 'src', replacement: resolve(__dirname, 'src') }],
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      exclude: [
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/vitest.setup.ts',
        '**/vitest.setup.tsx',
        'vite.config.ts',
      ],
    }),
    visualizer({
      filename: 'visualizer/stats.html',
      template: 'treemap',
      open: true,
    }),
  ],
  test: {
    setupFiles: ['./src/vitest.setup.ts'],
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
  },
});
