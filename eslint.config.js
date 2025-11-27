import { baseConfig } from '@torian12321/eslint-config';

export default [
  { ignores: ['docs', 'typedoc.config.js'] },
  ...baseConfig,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  },
  {
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSEnumDeclaration',
          message: 'Avoid the use of enums',
        },
      ],
    },
  },
];
