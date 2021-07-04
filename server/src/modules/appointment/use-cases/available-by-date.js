import { findUnavailableTimes } from '../model';

const availableAppointmentsByDate = async ({
  targetedDate,
  openTime,
  workingHours,
  appointmentDurationInMinutes,
}) => {
  const appointmentsArray = [];

  let data = await findUnavailableTimes(targetedDate);
  data = data.map(({ appointmentTime }) => appointmentTime);

  const startHour = parseFloat(openTime.split(':')[0]);
  const endHour = startHour + workingHours;

  for (let i = startHour; i < endHour; i += 1) {
    for (let j = 0; j < 60 / appointmentDurationInMinutes; j += 1) {
      const time = `${i < 10 ? '0' : ''}${i}:${
        j === 0 ? '00' : appointmentDurationInMinutes * j
      }:00`;

      if (!data.includes(time)) {
        appointmentsArray.push(time);
      }
    }
  }
  return appointmentsArray;
};

export default availableAppointmentsByDate;
