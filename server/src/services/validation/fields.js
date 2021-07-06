import { string, number, array, date } from 'yup';
import * as errMsgs from './err-msgs';
import * as constants from '../../constants';

export const email = string()
  .email(errMsgs.INVALID_EMAIL)
  .required(errMsgs.FIELD_REQUIRED('email'));

export const userName = string()
  .min(1, errMsgs.INVALID_USERNAME)
  .max(20, errMsgs.INVALID_USERNAME)
  .required(errMsgs.FIELD_REQUIRED('userName'));

export const firstName = string()
  .min(1, errMsgs.FIELD_REQUIRED('firstName'))
  .max(20)
  .required(errMsgs.FIELD_REQUIRED('firstName'));

export const lastName = string()
  .min(1, errMsgs.FIELD_REQUIRED('lastName'))
  .max(20)
  .required(errMsgs.FIELD_REQUIRED('lastName'));

export const id = number()
  .min(1)
  .required(errMsgs.FIELD_REQUIRED('id'))
  .typeError(errMsgs.FIELD_REQUIRED('id'));

export const phoneNumber = string()
  .matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    errMsgs.INVALID_PHONE
  )
  .required(errMsgs.FIELD_REQUIRED('phone number'));

export const password = string()
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    errMsgs.SHORT_PASSWORD
  )
  .required(errMsgs.FIELD_REQUIRED('password'));

export const time = string().matches(
  /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:00$/,
  errMsgs.INVALID_OPEN_TIME
);

export const workingHours = string().matches(
  /^([0-9]|0[0-9]|1[0-9]|2[0-3])$/,
  errMsgs.INVALID_HOURS_COUNT
);

export const appointmentDurationInMinutes = string().matches(
  /^([2-9]0)$/,
  errMsgs.INVALID_APPOINTMENT_DURATION
);

export const daysOff = array().of(string().oneOf(constants.ARRAY_OF_DAY_NAMES));
export const targetedDate = date().typeError(errMsgs.INVALID_DATE);
