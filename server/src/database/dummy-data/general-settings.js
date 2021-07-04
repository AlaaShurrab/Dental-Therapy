import { query } from '../connect';

const createSettings = async ({
  openTime,
  workingHours,
  appointmentDurationInMinutes,
}) => {
  const sql = `INSERT INTO general_settings(
    open_time,
    working_hours,
    appointment_duration_in_minutes
  ) VALUES (
    $1,
    $2,
    $3
    ) RETURNING *`;
  const res = await query(sql, [
    openTime,
    workingHours,
    appointmentDurationInMinutes,
  ]);
  return res.rows[0];
};

const createGeneralSettings = async () => {
  const settings = await createSettings({
    openTime: '12:00',
    workingHours: 8,
    appointmentDurationInMinutes: 60,
  });

  return {
    settings,
  };
};

export default createGeneralSettings;
