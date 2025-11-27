export default {
  $schema:
    'https://developer.microsoft.com/json-schemas/tsdoc/v0/tsdoc.schema.json',
  entryPoints: ['./src/index.ts', './src/is/index.ts'],
  tsconfig: 'tsconfig.json',
  out: 'docs/typedoc',
  readme: 'README.md',
  theme: 'typedoc-github-theme',
  plugin: ['typedoc-github-theme'],
  name: '@torian12321/js-library-template',
  pretty: true,
  excludePrivate: true,
  excludeProtected: true,
  excludeInternal: true,
  includeVersion: true,
  githubPages: true,
};
