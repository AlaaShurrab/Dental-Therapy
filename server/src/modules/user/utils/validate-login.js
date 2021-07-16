import Boom from '@hapi/boom';
import {
  fields,
  createSchema,
  validate as _validate,
  errMsgs,
} from '../../../services/validation';

const { email, password, userName } = fields;

const loginByUserName = createSchema({
  userName: userName.required(errMsgs.FIELD_REQUIRED('userName')),
  password: password.required(errMsgs.FIELD_REQUIRED('email')),
});

const loginByEmail = createSchema({
  email,
  password,
});

const validate = (data) => {
  if (data.email)
    return _validate(loginByEmail, {
      email: data.email,
      password: data.password,
    });
  if (data.userName) {
    return _validate(loginByUserName, {
      userName: data.userName,
      password: data.password,
    });
  }
  throw Boom.badData(errMsgs.FIELD_REQUIRED('username or email'));
};

export default validate;
