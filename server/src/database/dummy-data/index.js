import dotenv from 'dotenv';
import createUsers from './users';
import createPatients from './patients';
import createGeneralTherapy from './general-therapy';
import createTeethTherapy from './teeth-therapy';
import createPatientTeethTherapy from './patient-teeth-therapy';
// import createPatientGeneralTherapy from './patient-general-therapy';
import createFinancialRecords from './financial-records';
import createAppointments from './appointments';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const buildData = async () => {
  const createdData = {};
  createdData.users = await createUsers(createdData);
  createdData.patients = await createPatients(createdData);
  createdData.generalTherapy = await createGeneralTherapy(createdData);
  createdData.teethTherapy = await createTeethTherapy(createdData);
  createdData.patientTeethTherapy = await createPatientTeethTherapy(
    createdData
  );
  //   createdData.patientGeneralTherapy = await createPatientGeneralTherapy(
  //     createdData
  //   );
  createdData.financialRecords = await createFinancialRecords(createdData);
  createdData.appointments = await createAppointments(createdData);

  return createdData;
};

export default buildData;
