import * as Appointment from '../use-cases';
import { useCases as settings } from '../../general-settings';
import {
  isDateCurrentlyAvailable,
  getDayByDate,
  dateFormatter,
} from '../../../helpers';
import { validateAvailableAppointments } from '../utils';

const availableAppointments = async (req, res, next) => {
  const { targetedDate } = req.query;
  try {
    await validateAvailableAppointments({ targetedDate });

    const targetedDateFormatted = dateFormatter(targetedDate);

    const { openTime, workingHours, appointmentDurationInMinutes, daysOff } =
      await settings.getGeneralSettings();

    let appointmentsArray = [];

    if (
      isDateCurrentlyAvailable(targetedDateFormatted) &&
      !daysOff.includes(getDayByDate(targetedDateFormatted))
    ) {
      appointmentsArray = await Appointment.availableByDate({
        targetedDate: targetedDateFormatted,
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
