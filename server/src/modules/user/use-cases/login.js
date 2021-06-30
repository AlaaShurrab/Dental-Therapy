import Boom from '@hapi/boom';

import * as User from '../model';
import { verifyPassword } from '../../../helpers';
import { errorMsgs } from '../../../services/error-handler';

const login = async ({ email, userName, password }) => {
  let userData;
  if (email) {
    userData = await User.findUserByEmail(email);
  } else {
    userData = await User.findUserByUserName(userName);
  }

  if (!userData) {
    throw Boom.unauthorized(
      errorMsgs[
        email ? 'INVALID_EMAIL_OR_PASSWORD' : 'INVALID_USERNAME_OR_PASSWORD'
      ]
    );
  }

  const isPasswordValid = await verifyPassword(password, userData.password);

  if (!isPasswordValid) {
    throw Boom.unauthorized(
      errorMsgs[
        email ? 'INVALID_EMAIL_OR_PASSWORD' : 'INVALID_USERNAME_OR_PASSWORD'
      ]
    );
  }

  userData.password = null;

  return userData;
};

export default login;
