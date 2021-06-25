import { query } from '../connect';

const createTherapy = async ({
  patientId,
  teethTherapyId,
  toothLabel,
  therapyNumber,
  notes,
}) => {
  const sql = `INSERT INTO patient_teeth_therapy(
    patient_id,
    teeth_therapy_id,
    tooth_lable,
    therapy_number,
    notes
  ) VALUES (
    $1,
    $2,
    $3,
    $4,
    $5
    ) RETURNING *`;
  const res = await query(sql, [
    patientId,
    teethTherapyId,
    toothLabel,
    therapyNumber,
    notes,
  ]);
  return res.rows[0];
};

const createPatientTeethTherapy = async () => {
  const therapy1 = await createTherapy({
    patientId: '1',
    teethTherapyId: '1',
    toothLabel: '11',
    therapyNumber: '1',
    notes: 'some therapy notes',
  });

  const therapy2 = await createTherapy({
    patientId: '1',
    teethTherapyId: '1',
    toothLabel: '11',
    therapyNumber: '2',
    notes: 'therapy 2',
  });

  const therapy3 = await createTherapy({
    patientId: '1',
    teethTherapyId: '1',
    toothLabel: '11',
    therapyNumber: '3',
    notes: 'therapy 3',
  });

  const therapy4 = await createTherapy({
    patientId: '5',
    teethTherapyId: '1',
    toothLabel: '12',
    therapyNumber: '1',
    notes: 'therapy note',
  });

  const therapy5 = await createTherapy({
    patientId: '5',
    teethTherapyId: '1',
    toothLabel: '22',
    therapyNumber: '1',
    notes: 'therapy note',
  });

  const therapy6 = await createTherapy({
    patientId: '2',
    teethTherapyId: '1',
    toothLabel: '12',
    therapyNumber: '1',
    notes: 'therapy note',
  });

  const therapy7 = await createTherapy({
    patientId: '3',
    teethTherapyId: '1',
    toothLabel: '11',
    therapyNumber: '1',
    notes: 'therapy note',
  });

  const therapy8 = await createTherapy({
    patientId: '5',
    teethTherapyId: '1',
    toothLabel: '15',
    therapyNumber: '1',
    notes: 'therapy note',
  });

  return {
    therapy1,
    therapy2,
    therapy3,
    therapy4,
    therapy5,
    therapy6,
    therapy7,
    therapy8,
  };
};

export default createPatientTeethTherapy;
