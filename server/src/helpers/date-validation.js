import Boom from '@hapi/boom';
import isValidDate from './is-valid-date';

import { errMsgs } from '../services/validation';

const dateValidation = (date, fieldName) => {
  if (date && !isValidDate(date)) {
    throw Boom.badData(errMsgs.INVALID_DATE);
  }
  const required = () => {
    if (!date) {
      throw Boom.badData(errMsgs.FIELD_REQUIRED(fieldName));
    }
  };
  return { required };
};

export default dateValidation;
