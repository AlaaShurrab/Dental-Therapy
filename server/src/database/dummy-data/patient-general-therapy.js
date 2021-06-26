import { query } from '../connect';

const createTherapy = async ({
  patientId,
  generalTherapyId,
  therapyNumber,
  notes,
}) => {
  const sql = `INSERT INTO patient_general_therapy(
    patient_id,
    general_therapy_id,
    therapy_number,
    notes
  ) VALUES (
    $1,
    $2,
    $3,
    $4
    ) RETURNING *`;
  const res = await query(sql, [
    patientId,
    generalTherapyId,
    therapyNumber,
    notes,
  ]);
  return res.rows[0];
};

const createPatientGeneralTherapy = async () => {
  const therapy1 = await createTherapy({
    patientId: '1',
    generalTherapyId: '1',
    therapyNumber: '1',
    notes: 'some therapy notes',
  });

  const therapy2 = await createTherapy({
    patientId: '1',
    generalTherapyId: '2',
    therapyNumber: '1',
    notes: 'therapy 2',
  });

  const therapy3 = await createTherapy({
    patientId: '3',
    generalTherapyId: '1',
    therapyNumber: '1',
    notes: 'therapy 3',
  });

  const therapy4 = await createTherapy({
    patientId: '5',
    generalTherapyId: '2',
    therapyNumber: '1',
    notes: 'therapy note',
  });

  return {
    therapy1,
    therapy2,
    therapy3,
    therapy4,
  };
};

export default createPatientGeneralTherapy;
