import {
  fields,
  createSchema,
  validate as _validate,
} from '../../../services/validation';

const { id } = fields;

const validateRemoveAppointmentSchema = createSchema({
  appointmentId: id,
});

const validate = ({ appointmentId }) => {
  _validate(validateRemoveAppointmentSchema, { appointmentId });
};

export default validate;
