import { string, date } from 'yup';
import * as errMsgs from './err-msgs';

export const email = string()
  .email(errMsgs.INVALID_EMAIL)
  .required(errMsgs.FIELD_REQUIRED('email'));

export const userName = string()
  .min(1, errMsgs.INVALID_USERNAME)
  .max(20, errMsgs.INVALID_USERNAME)
  .required(errMsgs.FIELD_REQUIRED('userName'));

export const password = string()
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    errMsgs.SHORT_PASSWORD
  )
  .required(errMsgs.FIELD_REQUIRED('password'));

export const targetedDate = date().typeError(errMsgs.INVALID_DATE);
