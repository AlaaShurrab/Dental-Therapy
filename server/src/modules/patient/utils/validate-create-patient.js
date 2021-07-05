import { dateValidation } from '../../../helpers';
import {
  fields,
  createSchema,
  validate as _validate,
} from '../../../services/validation';

const { firstName, lastName, dateField, phoneNumber } = fields;

const validateCreatePatient = createSchema({
  firstName,
  lastName,
  birthday: dateField,
  phone: phoneNumber,
});

const validate = (data) => {
  _validate(validateCreatePatient, data);

  dateValidation(data.birthday, 'birthday').required();
};

export default validate;
