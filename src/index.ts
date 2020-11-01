export const isObject = (val: any): boolean => typeof val === 'object' && val !== null;

export const isNumber = (val: any): boolean => !isNaN(val);
