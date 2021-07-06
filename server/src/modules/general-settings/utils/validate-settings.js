import {
  fields,
  createSchema,
  validate as _validate,
} from '../../../services/validation';

const { time, workingHours, appointmentDurationInMinutes, daysOff } = fields;

const updateSettings = createSchema({
  openTime: time,
  workingHours,
  appointmentDurationInMinutes,
  daysOff,
});

const validate = (data) => {
  _validate(updateSettings, {
    openTime: data.openTime,
    workingHours: data.workingHours,
    appointmentDurationInMinutes: data.appointmentDurationInMinutes,
    daysOff: data.daysOff,
  });
};

export default validate;
