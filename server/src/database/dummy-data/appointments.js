import { query } from '../connect';

const createAppointment = async ({
  patientId,
  appointmentDate,
  appointmentTime,
  notes,
}) => {
  const sql = `INSERT INTO appointments(
    patient_id,
    appointment_date,
    appointment_time,
    notes
  ) VALUES (
    $1,
    $2,
    $3,
    $4
    ) RETURNING *`;
  const res = await query(sql, [
    patientId,
    appointmentDate,
    appointmentTime,
    notes,
  ]);
  return res.rows[0];
};

const createAppointments = async () => {
  const Record1 = await createAppointment({
    patientId: '2',
    appointmentDate: '2021-12-02T00:00:00.000Z',
    appointmentTime: '08:00',
    notes: 'some detailed info ',
  });

  const Record2 = await createAppointment({
    patientId: '1',
    appointmentDate: '2021-12-02T00:00:00.000Z',
    appointmentTime: '09:00',
    notes: 'some detailed info ',
  });

  const Record3 = await createAppointment({
    patientId: '4',
    appointmentDate: '2021-12-02T00:00:00.000Z',
    appointmentTime: '10:00',
    notes: 'some detailed info ',
  });

  const Record4 = await createAppointment({
    patientId: '2',
    appointmentDate: '2022-12-02T00:00:00.000Z',
    appointmentTime: '08:00',
    notes: 'some detailed info ',
  });

  const Record5 = await createAppointment({
    patientId: '3',
    appointmentDate: '2021-12-02T00:00:00.000Z',
    appointmentTime: '17:00',
    notes: 'some detailed info ',
  });

  const Record6 = await createAppointment({
    patientId: '5',
    appointmentDate: '2021-11-02T00:00:00.000Z',
    appointmentTime: '08:00',
    notes: 'some detailed info ',
  });

  const Record7 = await createAppointment({
    patientId: '6',
    appointmentDate: '2021-12-03T00:00:00.000Z',
    appointmentTime: '08:00',
    notes: 'some detailed info ',
  });

  return {
    Record1,
    Record2,
    Record3,
    Record4,
    Record5,
    Record6,
    Record7,
  };
};

export default createAppointments;
