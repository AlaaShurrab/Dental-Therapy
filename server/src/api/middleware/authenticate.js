import Boom from '@hapi/boom';
import { verify } from 'jsonwebtoken';

import config from '../../config';
import * as constants from '../../constants';
import { findUserById } from '../../modules/user/model';

const { TOKEN_NAME } = constants;
const { secret } = config.server;

const authenticate = async (req, res, next) => {
  try {
    const { cookies } = req;
    if (!cookies || !cookies[TOKEN_NAME]) {
      throw Boom.unauthorized();
    }

    let decoded;
    try {
      decoded = await verify(cookies[TOKEN_NAME], secret);
    } catch (error) {
      res.clearCookie(TOKEN_NAME);
      throw Boom.unauthorized();
    }

    // get user Id from token
    const { id } = decoded;
    const user = await findUserById(id);

    if (!user) {
      res.clearCookie(TOKEN_NAME);
      throw Boom.unauthorized();
    }

    req.user = user;
    return next();
  } catch (error) {
    next(error);
  }
};

export default authenticate;
