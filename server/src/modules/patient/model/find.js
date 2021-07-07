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

export { findPatientId };
