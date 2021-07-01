import { query } from '../../../database';

const findUserByEmail = async (email, client) => {
  const values = [email];
  const sql = `
    SELECT
      id,
      user_name,
      email,
      password,
      role::VARCHAR

    FROM users
      WHERE email = $1
  `;

  const res = await query(sql, values, client);
  return res.rows[0];
};

const findUserByUserName = async (userName, client) => {
  const values = [userName];
  const sql = `
    SELECT
      id,
      user_name,
      email,
      password,
      role::VARCHAR

    FROM users
      WHERE user_name = $1
  `;

  const res = await query(sql, values, client);
  return res.rows[0];
};

export { findUserByEmail, findUserByUserName };
