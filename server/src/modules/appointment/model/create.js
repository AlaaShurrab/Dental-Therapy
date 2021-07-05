import { query } from '../../../database';

const createAppointment = async (
  { patientId, appointmentDate, appointmentTime },
  client
) => {
  const value = [patientId, appointmentDate, appointmentTime];
  const sql = `
    INSERT INTO appointments(
      patient_id,
      appointment_date,
      appointment_time
    )

      VALUES (
        $1,
        $2,
        $3
      ) RETURNING id
  `;
  const res = await query(sql, value, client);
  return res.rows[0];
};

export { createAppointment };
