import { findBookedDate } from '../model';

const getAllBookedDate = async () => {
  const data = await findBookedDate();
  return data.map(({ appointmentDate }) => appointmentDate);
};

export default getAllBookedDate;
