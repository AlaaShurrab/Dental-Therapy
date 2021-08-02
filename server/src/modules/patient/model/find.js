import { query } from '../../../database';

const findPatientId = async ({ firstName, lastName, phone }, client) => {
  const values = [firstName, lastName, phone];
  const sql = `
    SELECT
      id
    FROM 
      patients
    WHERE
      first_name = $1 
        AND last_name = $2 
        AND phone = $3 ;
  `;

  const res = await query(sql, values, client);
  return res.rows[0];
};

const findPatientFromToWithName = async (
  { offset, limit, fullName },
  client
) => {
  const values = [offset, limit, fullName];
  const sql = `
  SELECT
  id,
  CONCAT  (first_name, ' ', last_name) AS full_name,
  EXTRACT(YEAR FROM AGE(birthday)) AS age,
  phone
FROM 
  patients
WHERE
  CONCAT (first_name, ' ', last_name) ~* COALESCE($3,'' )
OFFSET 
  $1
LIMIT
  $2
  `;

  const res = await query(sql, values, client);
  return res.rows;
};

const findPatientWithPhone = async ({ phone }, client) => {
  const values = [phone];
  const sql = `
  SELECT
  id,
  CONCAT  (first_name, ' ', last_name) AS full_name,
  EXTRACT(YEAR FROM AGE(birthday)) AS age,
  phone
FROM 
  patients
WHERE
  phone LIKE $1
  `;

  const res = await query(sql, values, client);
  return res.rows;
};

export { findPatientId, findPatientFromToWithName, findPatientWithPhone };
