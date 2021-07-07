import * as Patient from '../model';
import { dateFormatter } from '../../../helpers';
import { validateCreatePatient } from '../utils';

const createPatient = async (patientData, client) => {
  const { firstName, lastName, phone, birthday } = patientData;
  const oldUser = await Patient.findPatientId({
    firstName,
    lastName,
    phone,
  });
  // check if the patient is exist
  if (oldUser && oldUser.id) return oldUser.id;

  // add new patient
  await validateCreatePatient({ ...patientData, birthday });

  const birthdayFormatted = dateFormatter(birthday);

  const { id: patientId } = await Patient.createPatient(
    { ...patientData, birthday: birthdayFormatted },
    client
  );
  return patientId;
};

export default createPatient;
