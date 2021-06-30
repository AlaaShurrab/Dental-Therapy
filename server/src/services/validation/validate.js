import Boom from '@hapi/boom';

const validate = (schema, data, { abortEarly = false, ...options } = {}) => {
  try {
    const validData = schema.validateSync(data, {
      abortEarly,
      ...options,
    });
    return { data: validData };
  } catch (error) {
    throw Boom.badData(error);
  }
};

export default validate;
