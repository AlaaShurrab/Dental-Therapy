import { getAllBookedDate } from '../use-cases';

const bookedAppointments = async (req, res, next) => {
  try {
    const bookedDate = await getAllBookedDate();

    res.json(bookedDate);
  } catch (error) {
    next(error);
  }
};

export default bookedAppointments;
