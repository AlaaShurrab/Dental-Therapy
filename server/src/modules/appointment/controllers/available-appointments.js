// start, end, lime
import moment from 'moment';
import { isDateCurrentlyAvailable } from '../../../helpers';
import * as Appointment from '../use-cases';
import { availableAppointmentsName } from '../utils';

const availableAppointments = async (req, res, next) => {
  const { targetedDate } = req.query;
  try {
    await availableAppointmentsName({ targetedDate });

    // GET THE DATA
    const data = {
      start: '01:30',
      duration: 6,
      stepByMinute: 20,
    };

    let arr = [];
    if (isDateCurrentlyAvailable(moment(targetedDate, 'DD-MM-YYYY'))) {
      arr = await Appointment.availableByDate({
        targetedDate,
        ...data,
      });
    }

    res.json(arr);
  } catch (error) {
    next(error);
  }
};

export default availableAppointments;
