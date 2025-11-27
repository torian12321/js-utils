import { isObject } from 'src/typeChecker';

/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 *
 * @param {...object} objects - Objects to merge
 * @returns {object} New object with merged key/values
 *
 * @example
 * ```ts
 * mergeDeep({ a: 1, b: 2 }, { b: 3, c: 4 });
 * // => { a: 1, b: 3, c: 4 }
 * ```
 * ```ts
 * mergeDeep({ a: 1, b: 2 }, { b: 3, c: 4 });
 * // => { a: 1, b: 3, c: 4 }
 * ```
 */

export const mergeDeep = (...objects: { [key: string]: unknown }[]) =>
  objects.reduce((prev, obj) => {
    Object.keys(obj).forEach(key => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal);
      } else if (isObject(pVal) && isObject(oVal)) {
        // eslint-disable-next-line
        // @ts-ignore
        prev[key] = mergeDeep(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });

    return prev;
  }, {});
