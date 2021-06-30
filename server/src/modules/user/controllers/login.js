import * as User from '../use-cases';
import createToken from '../../../helpers/create-token';
import { validateLogin } from '../utils';

const login = async (req, res, next) => {
  const { email, userName, password } = req.body;

  try {
    await validateLogin({
      email,
      userName,
      password,
    });

    const user = await User.login({
      email,
      password,
    });

    const { token, tokenName, options } = createToken({ id: user.id });

    res.cookie(tokenName, token, options).json(user);
  } catch (error) {
    next(error);
  }
};

export default login;
