import { query } from '../connect';

const createRecord = async ({ patientId, title, payment }) => {
  const sql = `INSERT INTO financial_records(
    patient_id,
    title,
    payment
  ) VALUES (
    $1,
    $2,
    $3
    ) RETURNING *`;
  const res = await query(sql, [patientId, title, payment]);
  return res.rows[0];
};

const createFinancialRecords = async () => {
  const Record1 = await createRecord({
    patientId: '1',
    title: 'amalgam',
    payment: '-150',
  });

  const Record2 = await createRecord({
    patientId: '1',
    title: 'payment',
    payment: '100',
  });

  const Record3 = await createRecord({
    patientId: '2',
    title: 'some thing',
    payment: '-1000',
  });

  return {
    Record1,
    Record2,
    Record3,
  };
};

export default createFinancialRecords;
