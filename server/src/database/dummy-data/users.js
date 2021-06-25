import { query } from '../connect';

const createUser = async ({
  firstName,
  lastName,
  email,
  password,
  userName,
  role,
}) => {
  const sql = `INSERT INTO users(
    first_name,
    last_name,
    email,
    password,
    user_name,
    role
  ) VALUES (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6
    ) RETURNING *`;
  const res = await query(sql, [
    firstName,
    lastName,
    email,
    password,
    userName,
    role,
  ]);
  return res.rows[0];
};
// 123456Aa password
const password = '$2a$08$23ik.euo.8EM.tqkX/43ke539bnaWX/2vK8nsbrdlYl0UhGMwCR92';

const createUsers = async () => {
  const client1 = await createUser({
    firstName: 'rook',
    lastName: 'shurrab',
    email: 'dentist@gmail.com',
    password,
    userName: 'dentist',
    role: 'DENTIST',
  });

  const client2 = await createUser({
    firstName: 'alaa',
    lastName: 'shurrab',
    email: 'ASSISTANT@gmail.com',
    password,
    userName: 'Alash',
    role: 'ASSISTANT',
  });

  const admin1 = await createUser({
    firstName: 'admin',
    lastName: 'shurrab',
    email: 'admin@gmail.com',
    password,
    userName: 'admin',
    role: 'ADMIN',
  });

  return {
    client1,
    client2,
    admin1,
  };
};

export default createUsers;
