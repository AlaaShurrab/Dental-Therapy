import { query } from '../../../database';

const createPatient = async (
  { firstName, lastName, birthday, phone },
  client
) => {
  const value = [firstName, lastName, birthday, phone];
  const sql = `
    INSERT INTO patients(
      first_name, 
      last_name, 
      birthday,
      phone 
    )

      VALUES (
        $1,
        $2,
        $3,
        $4
      ) RETURNING id
  `;
  const res = await query(sql, value, client);
  return res.rows[0];
};

export { createPatient };
