import * as Appointment from '../use-cases';

const removeAppointments = async (req, res, next) => {
  const { id: appointmentId } = req.params;
  try {
    await Appointment.removeAppointmentsById({ appointmentId });
    res.status(202).json();
  } catch (error) {
    next(error);
  }
};

export default removeAppointments;
