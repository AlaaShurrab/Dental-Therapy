import {
  fields,
  createSchema,
  validate as _validate,
} from '../../../services/validation';

const { fullName, offset, limit, phoneNumberNotReq } = fields;

const validateCreatePatient = createSchema({
  fullName,
  offset,
  limit,
  phone: phoneNumberNotReq,
});

const validate = (data) => {
  _validate(validateCreatePatient, data);
};

export default validate;
