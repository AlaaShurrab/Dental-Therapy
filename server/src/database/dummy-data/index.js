import dotenv from 'dotenv';
import createUsers from './users';
import createPatients from './patients';
import createGeneralTherapy from './general-therapy';
import createTeethTherapy from './teeth-therapy';
import createPatientTeethTherapy from './patient-teeth-therapy';
import createPatientGeneralTherapy from './patient-general-therapy';
import createFinancialRecords from './financial-records';
import createAppointments from './appointments';
import createGeneralSettings from './general-settings';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const buildData = async () => {
  const createdData = {};
  createdData.users = await createUsers();
  createdData.patients = await createPatients();
  createdData.generalTherapy = await createGeneralTherapy();
  createdData.teethTherapy = await createTeethTherapy();
  createdData.patientTeethTherapy = await createPatientTeethTherapy();
  createdData.patientGeneralTherapy = await createPatientGeneralTherapy();
  createdData.financialRecords = await createFinancialRecords();
  createdData.appointments = await createAppointments();
  createdData.generalSettings = await createGeneralSettings();

  return createdData;
};

export default buildData;
