import * as patients from '../use-cases';

const getPatients = async (req, res, next) => {
  const { offset, limit, phone, fullName } = req.query;
  console.log({ offset, limit, phone, fullName });
  try {
    const patientsArray = await patients.getPatients({
      offset,
      limit,
      phone,
      fullName,
    });
    res.json(patientsArray);
  } catch (error) {
    next(error);
  }
};

export default getPatients;
