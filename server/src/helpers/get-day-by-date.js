import moment from 'moment';

import * as constants from '../constants';

const getDayByDate = (date) =>
  moment(date, constants.DATE_FORMAT).format(constants.DAY_FORMAT);

export default getDayByDate;
