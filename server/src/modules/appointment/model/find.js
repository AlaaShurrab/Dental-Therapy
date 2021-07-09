import { query } from '../../../database';

const findUnavailableTimes = async (date, client) => {
  const values = [date];
  const sql = `
    SELECT
      appointment_time

    FROM appointments 
      WHERE appointment_date = $1
  `;
  const res = await query(sql, values, client);
  return res.rows;
};

const findAppointmentsById = async ({ appointmentId }, client) => {
  const values = [appointmentId];
  const sql = `
    SELECT
      *
    FROM appointments 
      WHERE id = $1
  `;
  const res = await query(sql, values, client);
  return res.rows[0];
};

export { findUnavailableTimes, findAppointmentsById };
