## Considerations when adding new functions:

- Add typing, not just on argumest, but also in what a function returns.
- Add correct testing for each function, at least one for success and one for error.
- Add [JSDoc](https://jsdoc.app/about-getting-started) to help use the function.
- Be sure the function name indicates correctly what it does.
- Keep it simple, if a function or constant is only for internal support, do not export it.
- If possible, allow to override configuration:

```js
/** ❌ bad */
const formatDate = (dateString: string) => {
 return dayjs(dateString, [DATE_FORMAT]);
}
```

> Why? avoid hardcoded internal settings, allow to optionally pass configurations with the params.

```js
/** ✅ good */
const formatDate = (dateString: string, format?: string = DATE_FORMAT) => {
  return dayjs(dateString, [format]);
}
```

- Function arguments and return value should be [primitive types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values)

```js
/** ❌ bad */
const isValidDate = (dateValue: dayjs.Dayjs): boolean => {
 return dayjs(dateValue).isValid();
}
```

> Why? When consuming the library we should not depend on external libraries, allowing future internal refactoring.

```js
/** ✅ good */
const formatDate = (dateValue: string | Date): string => {
  return dayjs(date).isValid();
}
```
