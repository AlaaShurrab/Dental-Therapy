import dateValidation from '../../../helpers/date-validation';
import {
  fields,
  createSchema,
  validate as _validate,
} from '../../../services/validation';

const { time, optionalText } = fields;

const addAppointmentsSchema = createSchema({
  appointmentTime: time,
  notes: optionalText,
});

const validate = ({ appointmentTime, appointmentDate, notes }) => {
  _validate(addAppointmentsSchema, { appointmentTime, notes });
  dateValidation(appointmentDate, 'appointmentDate').required();
};

export default validate;
