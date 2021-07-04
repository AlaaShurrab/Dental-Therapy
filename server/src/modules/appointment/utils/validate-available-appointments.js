import Boom from '@hapi/boom';
import * as errMsgs from '../../../services/validation/err-msgs';

import {
  fields,
  createSchema,
  validate as _validate,
} from '../../../services/validation';

const { targetedDate } = fields;

const availableAppointmentsSchema = createSchema({
  targetedDate,
});

const validate = (data) => {
  if (!data.targetedDate)
    throw Boom.badData(errMsgs.FIELD_REQUIRED('targetedDate'));
  try {
    return _validate(availableAppointmentsSchema, {
      targetedDate: data.targetedDate,
    });
  } catch (error) {
    throw Boom.badData(errMsgs.INVALID_DATE);
  }
};

export default validate;
