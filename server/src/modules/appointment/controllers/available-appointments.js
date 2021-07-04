import moment from 'moment';
import Boom from '@hapi/boom';
import * as Appointment from '../use-cases';
import { useCases as settings } from '../../general-settings';
import { isDateCurrentlyAvailable } from '../../../helpers';
import * as errMsgs from '../../../services/validation/err-msgs';
import { validateAvailableAppointments } from '../utils';

const availableAppointments = async (req, res, next) => {
  const { targetedDate } = req.query;
  try {
    if (!targetedDate)
      throw Boom.badData(errMsgs.FIELD_REQUIRED('targetedDate'));

    await validateAvailableAppointments({ targetedDate });

    const date = moment(targetedDate, 'DD-MM-YYYY');

    const { openTime, workingHours, appointmentDurationInMinutes, daysOff } =
      await settings.getGeneralSettings();

    let appointmentsArray = [];

    if (
      isDateCurrentlyAvailable(date) &&
      !daysOff.includes(date.format('dddd'))
    ) {
      appointmentsArray = await Appointment.availableByDate({
        targetedDate,
        openTime,
        workingHours,
        appointmentDurationInMinutes,
      });
    }

    res.json(appointmentsArray);
  } catch (error) {
    next(error);
  }
};

export default availableAppointments;
