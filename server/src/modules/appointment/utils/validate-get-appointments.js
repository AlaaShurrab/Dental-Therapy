import Boom from '@hapi/boom';
import { dateValidation, isDateCurrentlyAvailable } from '../../../helpers';
import {
  fields,
  createSchema,
  validate as _validate,
  errMsgs,
} from '../../../services/validation';

const { phoneNumber, fullName } = fields;

const validateGetAppointmentsSchema = createSchema({
  phone: phoneNumber,
  fullName,
});

const validate = (data) => {
  _validate(validateGetAppointmentsSchema, data);

  if (!isDateCurrentlyAvailable(data.date)) {
    throw Boom.badData(errMsgs.INVALID_DATE);
  }
  dateValidation(data.date, 'date');
};

export default validate;
