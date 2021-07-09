import Boom from '@hapi/boom';
import { removeAppointment, findAppointmentsById } from '../model';
import { validateRemoveAppointments } from '../utils';
import { errorMsgs } from '../../../services/error-handler';

const removeAppointmentsById = async ({ appointmentId }) => {
  await validateRemoveAppointments({ appointmentId });
  // Check if the id is exist
  const appointmentData = await findAppointmentsById({ appointmentId });
  if (!appointmentData) {
    throw Boom.badRequest(errorMsgs.ID_NOT_EXISTS);
  }
  await removeAppointment({ appointmentId });
};

export default removeAppointmentsById;
