<p align="center">
  <a href="https://github.com/torian12321/js-library-template/actions/workflows/ci.yml"><img src="https://github.com/torian12321/js-library-template/actions/workflows/CI.yml/badge.svg?branch=master" alt="build status"></a>
    <a href="https://github.com/torian12321/js-library-template/releases/latest" title="Latest Release">
  <img alt="GitHub release" src="https://img.shields.io/github/v/release/torian12321/js-library-template" />
  </a>
</p>

## JS Library Template Usage

Template for js-libraries.

Create a [new repository](https://github.com/new) and select **@torian12321/js-library-template** from templates.

Search on the project for any reference to `@torian12321/js-library-template` and replace it with your library name.

Create your first functions following:

- Add [JSDoc comments](./docs/DOCUMENTATION.md#generating-documentation) rules.
- Add test coverage. (100% is required)
- Add function to `index.ts` file if you want to make it accessible.

Remove example functions `greet.ts`, `isBoolean.ts`, `isString.ts` and their respective tests files.

Remove [`JS Library Template Usage`](#js-library-template-usage) block from documentation

# Usage

## Environment Setup

- 1.  Generate a `.npmrc` file based on the provided `.npmrc.example`. [Details](./docs/NPMRC_TOKEN.md)

## Installation

```sh
npm install @torian12321/js-library-template --save-dev
```
