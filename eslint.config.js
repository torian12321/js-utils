import { baseConfig } from '@torian12321/eslint-config';

export default [
  { ignores: ['eslint.config.js'] },
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  },
];
