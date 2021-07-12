import dateValidation from '../../../helpers/date-validation';
import {
  fields,
  createSchema,
  validate as _validate,
} from '../../../services/validation';

const { time, optionalText, id } = fields;

const updateAppointmentsSchema = createSchema({
  appointmentId: id,
  appointmentTime: time,
  notes: optionalText,
});

const validate = ({
  appointmentDate,
  appointmentTime,
  notes,
  appointmentId,
}) => {
  _validate(updateAppointmentsSchema, {
    appointmentTime,
    notes,
    appointmentId,
  });
  dateValidation(appointmentDate, 'appointmentDate');
};

export default validate;
