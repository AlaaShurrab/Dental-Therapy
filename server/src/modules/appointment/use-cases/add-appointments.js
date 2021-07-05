import { createAppointment } from '../model';

const addAppointments = async (
  { patientId, appointmentDate, appointmentTime },
  client
) => {
  await createAppointment(
    { patientId, appointmentDate, appointmentTime },
    client
  );
};

export default addAppointments;
