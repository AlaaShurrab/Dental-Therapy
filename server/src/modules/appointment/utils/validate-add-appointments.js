import dateValidation from '../../../helpers/date-validation';
import {
  fields,
  createSchema,
  validate as _validate,
} from '../../../services/validation';

const { time } = fields;

const addAppointmentsSchema = createSchema({
  appointmentTime: time,
});

const validate = ({ appointmentTime, appointmentDate }) => {
  _validate(addAppointmentsSchema, { appointmentTime });
  dateValidation(appointmentDate, 'appointmentDate').required();
};

export default validate;
