import * as Appointment from '../use-cases';

const updateAppointments = async (req, res, next) => {
  const { appointmentDate, appointmentTime, notes } = req.body;
  const { id: appointmentId } = req.params;
  try {
    await Appointment.updateAppointmentsById({
      appointmentDate,
      appointmentTime,
      notes,
      appointmentId,
    });
    res.json();
  } catch (error) {
    next(error);
  }
};

export default updateAppointments;
