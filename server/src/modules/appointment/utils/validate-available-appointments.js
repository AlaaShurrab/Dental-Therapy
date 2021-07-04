import {
  fields,
  createSchema,
  validate as _validate,
} from '../../../services/validation';

const { targetedDate } = fields;

const availableAppointmentsSchema = createSchema({
  targetedDate,
});

const validate = (data) =>
  _validate(availableAppointmentsSchema, {
    targetedDate: data.targetedDate,
  });

export default validate;
