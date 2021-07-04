import { findUnavailableTimes } from '../model';

const availableAppointmentsByDate = async ({
  targetedDate,
  start,
  duration,
  stepByMoment,
}) => {
  const arr = [];
  let data = await findUnavailableTimes(targetedDate);
  data = data.map(({ appointmentTime }) => appointmentTime);

  const startHour = parseFloat(start.split(':')[0]);
  const endHour = startHour + duration;

  for (let i = startHour; i < endHour; i += 1) {
    for (let j = 0; j < 60 / stepByMoment; j += 1) {
      const time = `${i < 10 && '0'}${i}:${
        j === 0 ? '00' : stepByMoment * j
      }:00`;

      if (!data.includes(time)) {
        arr.push(time);
      }
    }
  }
  return arr;
};

export default availableAppointmentsByDate;
