import {
  fields,
  createSchema,
  validate as _validate,
  errMsgs,
} from '../../../services/validation';

const { id } = fields;

const validateRemoveAppointmentSchema = createSchema({
  appointmentId: id.required(errMsgs.FIELD_REQUIRED('appointment id')),
});

const validate = ({ appointmentId }) => {
  _validate(validateRemoveAppointmentSchema, { appointmentId });
};

export default validate;
