import { useCases as settings } from '../../general-settings';
import { findUnavailableTimes } from '../model';
import { validateAddAppointments } from '../utils';
import { isDateCurrentlyAvailable, getDayByDate } from '../../../helpers';

const isAvailableTime = async ({ appointmentDate, appointmentTime }) => {
  // Validate the data and time
  await validateAddAppointments({ appointmentDate, appointmentTime });
  const { daysOff } = await settings.getGeneralSettings();

  // check tht time if is available
  if (
    isDateCurrentlyAvailable(appointmentDate) &&
    !daysOff.includes(getDayByDate(appointmentDate))
  ) {
    const unavailableTimes = await findUnavailableTimes(appointmentDate);
    return !unavailableTimes
      .map(({ appointmentTime: time }) => time)
      .includes(appointmentTime);
  }
};

export default isAvailableTime;
