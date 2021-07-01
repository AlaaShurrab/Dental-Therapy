import { compare } from 'bcryptjs';

const verifyPassword = (password, hash) => compare(password, hash);

export default verifyPassword;
