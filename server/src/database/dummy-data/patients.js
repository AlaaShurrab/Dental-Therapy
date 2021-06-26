import { query } from '../connect';

const createPatient = async ({ firstName, lastName, birthday, phone }) => {
  const sql = `INSERT INTO patients(
    first_name,
    last_name,
    birthday,
    phone
  ) VALUES (
    $1,
    $2,
    $3,
    $4
    ) RETURNING *`;
  const res = await query(sql, [firstName, lastName, birthday, phone]);
  return res.rows[0];
};

const createPatients = async () => {
  const patient1 = await createPatient({
    firstName: 'rook',
    lastName: 'shurrab',
    birthday: '2022-12-02T00:00:00.000Z',
    phone: '4438983890',
  });

  const patient2 = await createPatient({
    firstName: 'Alexie',
    lastName: 'Jenkin',
    birthday: '1946-12-02T00:00:00.000Z',
    phone: '0599010102',
  });

  const patient3 = await createPatient({
    firstName: 'Vivian',
    lastName: 'Mills',
    birthday: '1955-12-02T00:00:00.000Z',
    phone: '0599010101',
  });

  const patient4 = await createPatient({
    firstName: 'Minerva',
    lastName: 'Abernathy',
    birthday: '1965-12-02T00:00:00.000Z',
    phone: '0599010103',
  });

  const patient5 = await createPatient({
    firstName: 'Marlin',
    lastName: 'Bahringer',
    birthday: '1975-12-02T00:00:00.000Z',
    phone: '4059901010',
  });

  const patient6 = await createPatient({
    firstName: 'Christiana',
    lastName: 'Stehr',
    birthday: '1985-12-02T00:00:00.000Z',
    phone: '0599010106',
  });

  const patient7 = await createPatient({
    firstName: 'Ben',
    lastName: 'Dickinson',
    birthday: '1995-12-02T00:00:00.000Z',
    phone: '0599010165',
  });

  const patient8 = await createPatient({
    firstName: 'احمد',
    lastName: 'سلسبيل',
    birthday: '2002-12-02T00:00:00.000Z',
    phone: '0599010654',
  });

  return {
    patient1,
    patient2,
    patient3,
    patient4,
    patient5,
    patient6,
    patient7,
    patient8,
  };
};

export default createPatients;
