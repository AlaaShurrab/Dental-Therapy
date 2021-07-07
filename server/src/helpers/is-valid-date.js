import moment from 'moment';

import * as constants from '../constants';

const isValidDate = (date) => {
  const aDate = moment(date, constants.DATE_FORMAT);
  return aDate.isValid();
};
export default isValidDate;
