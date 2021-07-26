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

const findBookedDate = async (client) => {
  const values = [];
  const sql = `
    SELECT
      time_count_by_date.appointment_date
    FROM
      (
        SELECT
          appointment_date,
          COUNT (appointment_time) AS time_count
        FROM
          appointments
        GROUP BY
          appointment_date 
      ) AS time_count_by_date
    WHERE   
      time_count_by_date.time_count >= (
        SELECT
          working_hours / (appointment_duration_in_minutes / 60) 
        FROM
          general_settings
        );
  `;
  const res = await query(sql, values, client);
  return res.rows;
};

export { findUnavailableTimes, findAppointmentsById, findBookedDate };
