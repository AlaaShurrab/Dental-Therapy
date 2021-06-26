const isDate = (a) => a instanceof Date;

const isArray = (a) => Array.isArray(a);

const isObject = (o) =>
  o === Object(o) && !isArray(o) && typeof o !== 'function';

const toCamel = (str) =>
  str.replace(/([-_][a-z])/gi, ($1) =>
    $1.toUpperCase().replace('-', '').replace('_', '')
  );

const keysToCamel = (data) => {
  if (isObject(data) && !isDate(data)) {
    const filteredObj = {};

    Object.keys(data).forEach((key) => {
      filteredObj[toCamel(key)] = keysToCamel(data[key]);
    });

    return filteredObj;
  }
  if (isArray(data)) {
    return data.map((i) => keysToCamel(i));
  }

  return data;
};

export default keysToCamel;
