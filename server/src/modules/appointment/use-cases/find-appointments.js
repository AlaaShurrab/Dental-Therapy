import moment from 'moment';

import { dateFormatter } from '../../../helpers';
import { findAppointmentsByDate, findAppointmentsByPatientId } from '../model';
import {
  findPatientIdByFullName,
  findPatientIdByPhone,
} from '../../patient/model';
import * as constants from '../../../constants';
import { validateGetAppointments } from '../utils';

const findAppointments = async ({ date, phone, fullName }) => {
  await validateGetAppointments({ date, phone, fullName });
  if (phone || fullName) {
    const patient = fullName
      ? await findPatientIdByFullName({ fullName })
      : await findPatientIdByPhone({ phone });
    if (patient) {
      const { id: patientId } = patient;
      return findAppointmentsByPatientId({ patientId });
    }
  } else {
    return findAppointmentsByDate({
      appointmentDate: date
        ? dateFormatter(date)
        : moment().format(constants.DATE_FORMAT),
    });
  }
};

export default findAppointments;
