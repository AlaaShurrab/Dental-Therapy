import { findAppointments } from '../use-cases';

const getAppointments = async (req, res, next) => {
  const { date, phone, fullName } = req.query;
  try {
    const appointmentData = await findAppointments({ date, phone, fullName });
    res.json(appointmentData);
  } catch (error) {
    next(error);
  }
};

export default getAppointments;
