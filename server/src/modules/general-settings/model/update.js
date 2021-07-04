import { query } from '../../../database';

const updateGeneralSettings = async (
  { openTime, workingHours, daysOff, appointmentDurationInMinutes },
  client
) => {
  const values = [
    daysOff,
    openTime,
    workingHours,
    appointmentDurationInMinutes,
  ];
  const sql = `
    UPDATE
      general_settings
    SET 
      days_off=COALESCE($1,days_off ),
      open_time=COALESCE($2,open_time ),
      working_hours=COALESCE($3,working_hours ),
      appointment_duration_in_minutes=COALESCE($4,appointment_duration_in_minutes )
    WHERE
      id=1
    RETURNING
      *
  `;

  const res = await query(sql, values, client);
  return res.rows[0];
};

export { updateGeneralSettings };
