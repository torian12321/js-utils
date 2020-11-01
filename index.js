const isObject = (val) => {
  return typeof val === 'object' && val !== null
};

module.exports.isObject = isObject;