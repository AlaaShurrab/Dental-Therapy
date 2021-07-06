import { createAppointment } from '../model';

const addAppointments = async (
  { patientId, appointmentDate, appointmentTime, notes },
  client
) => {
  await createAppointment(
    { patientId, appointmentDate, appointmentTime, notes },
    client
  );
};

export default addAppointments;
