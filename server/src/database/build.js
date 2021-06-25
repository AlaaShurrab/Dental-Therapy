import * as models from './models';
import init from './init';

import buildData from './dummy-data';

// development data build
const build = async () => {
  await init.createTypes();
  //   await init.buildMigrations();

  await models.users.createTable();
  await models.patients.createTable();
  await models.appointments.createTable();
  await models.generalTherapy.createTable();
  await models.teethTherapy.createTable();
  await models.patientGeneralTherapy.createTable();
  await models.patientTeethTherapy.createTable();
  await models.financialRecords.createTable();

  // build dummy data
  const createdData = await buildData();
  return createdData;
};

export default build;
