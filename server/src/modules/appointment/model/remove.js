import { query } from '../../../database';

const removeAppointment = async ({ appointmentId }, client) => {
  const values = [appointmentId];
  const sql = `
    DELETE FROM appointments 
      WHERE id = $1
      RETURNING id
  `;
  const res = await query(sql, values, client);
  return res.rows[0];
};

export { removeAppointment };
