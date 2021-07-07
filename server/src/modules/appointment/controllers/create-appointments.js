import Boom from '@hapi/boom';

import * as Appointment from '../use-cases';
import * as errMsgs from '../../../services/validation/err-msgs';
import { getClient } from '../../../database/connect';
import { useCases as Patient } from '../../patient';
import { timeFormatter, dateFormatter } from '../../../helpers';

const createAppointments = async (req, res, next) => {
  const {
    firstName,
    lastName,
    birthday,
    phone,
    appointmentDate,
    appointmentTime,
    notes,
  } = req.body;

  const client = await getClient();
  try {
    // reformat date and time
    const appointmentDateFormatted = dateFormatter(appointmentDate);
    const appointmentTimeFormatted = timeFormatter(appointmentTime);

    const AvailableIsTime = await Appointment.isAvailableTime({
      appointmentDate: appointmentDateFormatted,
      appointmentTime: appointmentTimeFormatted,
    });

    if (!AvailableIsTime) {
      throw Boom.badData(`${errMsgs.TIME_NOT_AVAILABLE}`);
    }

    await client.query('BEGIN');

    // get or create patientId
    const patientId = await Patient.createPatient(
      {
        firstName,
        lastName,
        birthday,
        phone,
      },
      client
    );
    // add the Appointment
    await Appointment.addAppointment(
      {
        patientId,
        appointmentDate: appointmentDateFormatted,
        appointmentTime: appointmentTimeFormatted,
        notes,
      },
      client
    );

    await client.query('COMMIT');

    res.status(201).json();
  } catch (error) {
    await client.query('ROLLBACK');
    next(error);
  } finally {
    client.release();
  }
};

export default createAppointments;
