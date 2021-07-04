import { query } from '../../../database';

const findUnavailableTimes = async (date, client) => {
  const values = [date];
  const sql = `
    SELECT
      appointment_time

    FROM appointments 
      WHERE to_char(appointment_date,'DD-MM-YYYY') = $1
  `;

  const res = await query(sql, values, client);
  return res.rows;
};

export { findUnavailableTimes };
