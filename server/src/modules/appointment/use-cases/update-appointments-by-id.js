import Boom from '@hapi/boom';
import { updateAppointmentsById, findAppointmentsById } from '../model';
import { validateUpdateAppointments } from '../utils';
import { errorMsgs } from '../../../services/error-handler';
import { dateFormatter, timeFormatter } from '../../../helpers';

const updateAppointments = async (data) => {
  const { appointmentTime, appointmentDate, appointmentId } = data;
  let appointmentDateFormatted;
  let appointmentTimeFormatted;

  if (appointmentDate) {
    appointmentDateFormatted = dateFormatter(appointmentDate);
  }
  if (appointmentTime) {
    appointmentTimeFormatted = timeFormatter(appointmentTime);
  }

  await validateUpdateAppointments({
    ...data,
    appointmentDate: appointmentDateFormatted,
    appointmentTime: appointmentTimeFormatted,
  });
  const appointment = await findAppointmentsById({ appointmentId });
  if (!appointment) {
    throw Boom.badRequest(errorMsgs.ID_NOT_EXISTS);
  }

  await updateAppointmentsById({
    ...data,
    appointmentDate: appointmentDateFormatted,
    appointmentTime: appointmentTimeFormatted,
  });
};

export default updateAppointments;
