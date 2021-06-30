import Boom from '@hapi/boom';
import * as errMsgs from '../../../services/validation/err-msgs';
import {
  fields,
  createSchema,
  validate as _validate,
} from '../../../services/validation';

const { email, password, userName } = fields;

const loginByUserName = createSchema({
  userName,
  password,
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
