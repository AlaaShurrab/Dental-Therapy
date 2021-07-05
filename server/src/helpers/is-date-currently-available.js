import moment from 'moment';

import * as constants from '../constants';

// check if is today fo future
const isDateCurrentlyAvailable = (date) =>
  moment().diff(moment(date, constants.DATE_FORMAT), 'days') <= 0;

export default isDateCurrentlyAvailable;
