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

const findAppointmentsByDate = async ({ appointmentDate }, client) => {
  const values = [appointmentDate];
  const sql = `
    SELECT
      a.id,
      CONCAT (p.first_name, ' ', p.last_name) AS full_name,
      p.phone,
      EXTRACT(YEAR FROM AGE(p.birthday)) AS age,
      a.appointment_date,
      a.appointment_time,
      a.notes
    FROM appointments AS a
      LEFT JOIN patients AS p
        ON a.patient_id = p.id
      WHERE a.appointment_date = $1
  `;
  const res = await query(sql, values, client);
  return res.rows;
};

const findAppointmentsByPatientId = async ({ patientId }, client) => {
  const values = [patientId];
  const sql = `
    SELECT
      a.id,
      CONCAT (p.first_name, ' ', p.last_name) AS full_name,
      p.phone,
      EXTRACT(YEAR FROM AGE(p.birthday)) AS age,
      a.appointment_date,
      a.appointment_time,
      a.notes
    FROM appointments AS a
      LEFT JOIN patients AS p
        ON a.patient_id = p.id
      WHERE patient_id = $1
  `;
  const res = await query(sql, values, client);
  return res.rows;
};

export {
  findUnavailableTimes,
  findAppointmentsById,
  findAppointmentsByDate,
  findAppointmentsByPatientId,
};
