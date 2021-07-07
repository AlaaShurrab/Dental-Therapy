import { query } from '../../../database';

const createAppointment = async (
  { patientId, appointmentDate, appointmentTime, notes },
  client
) => {
  const value = [patientId, appointmentDate, appointmentTime, notes];
  const sql = `
    INSERT INTO appointments(
      patient_id,
      appointment_date,
      appointment_time,
      notes
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

export { createAppointment };
