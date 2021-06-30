import jwt from 'jsonwebtoken';
import config from '../config';
import { TOKEN_NAME, TOKEN_MAX_AGE, envTypes } from '../constants';

const { secret } = config.server;
const { env } = config.common;

const createToken = (data) => {
  const maxAge = TOKEN_MAX_AGE;
  const expiresIn = `${TOKEN_MAX_AGE}ms`;
  const token = jwt.sign(data, secret, {
    expiresIn,
  });

  const expressOptions = {
    maxAge,
    httpOnly: true,
    secure: env === envTypes.PRODUCTION,
  };
  return { token, tokenName: TOKEN_NAME, options: expressOptions };
};

export default createToken;
