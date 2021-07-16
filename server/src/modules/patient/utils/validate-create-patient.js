import { dateValidation } from '../../../helpers';
import {
  fields,
  createSchema,
  validate as _validate,
  errMsgs,
} from '../../../services/validation';

const { firstName, lastName, phoneNumber } = fields;

const validateCreatePatient = createSchema({
  firstName: firstName.required(errMsgs.FIELD_REQUIRED('first name')),
  lastName: lastName.required(errMsgs.FIELD_REQUIRED('last name')),
  phone: phoneNumber.required(errMsgs.FIELD_REQUIRED('phone number')),
});

const validate = (data) => {
  _validate(validateCreatePatient, data);

  dateValidation(data.birthday, 'birthday').required();
};

export default validate;
