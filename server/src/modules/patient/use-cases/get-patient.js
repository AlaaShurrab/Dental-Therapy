import * as Patient from '../model';
import * as constants from '../../../constants';
import { validateGetPatient } from '../utils';

const getPatients = async ({ offset, limit, phone, fullName }, client) => {
  let patientProfileData;

  await validateGetPatient({ offset, limit, phone, fullName });

  if (phone) {
    patientProfileData = await Patient.findPatientWithPhone({ phone }, client);
  } else {
    patientProfileData = await Patient.findPatientFromToWithName(
      {
        offset: offset || constants.DEFAULT_OFFSET,
        limit: limit || constants.DEFAULT_LIMIT,
        fullName,
      },
      client
    );
  }

  return patientProfileData;
};

export default getPatients;
