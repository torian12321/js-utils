## Documentation

This project uses [TypeDoc](https://typedoc.org/) to automatically generate HTML documentation from JSDoc comments in your code.

### Generating Documentation

To generate documentation:

```bash
npm run docs
```

This will create HTML documentation in the `docs/` folder.

### Publishing to GitHub Pages

To publish the documentation to GitHub Pages:

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Choose the `master` (or `main`) branch and `/docs` folder
5. Click **Save**

The documentation will be available at `https://yourusername.github.io/js-library-template/`

### Writing Documentation

Add JSDoc comments to your functions and variables:

````typescript
/**
 * Description of what the function does
 * @param paramName - Description of the parameter
 * @returns Description of the return value
 *
 * @example
 * ```ts
 * myFunction('my param'); // show example output
 */
export const myFunction = (paramName: string): string => {
  // implementation
};
````

The documentation will be automatically generated from these comments.
