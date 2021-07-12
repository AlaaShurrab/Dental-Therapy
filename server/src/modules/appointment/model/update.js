import { query } from '../../../database';

const updateAppointmentsById = async (
  { appointmentDate, appointmentTime, notes, appointmentId },
  client
) => {
  const values = [appointmentDate, appointmentTime, notes, appointmentId];
  const sql = `
    UPDATE
      appointments
    SET 
      appointment_date = COALESCE($1, appointment_date),
      appointment_time = COALESCE($2, appointment_time),
      notes = COALESCE($3, notes)
    WHERE
      id = $4
    RETURNING
      *
  `;

  const res = await query(sql, values, client);
  return res.rows[0];
};

export { updateAppointmentsById };
