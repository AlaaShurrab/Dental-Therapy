import moment from 'moment';

import * as constants from '../constants';

const dateFormatter = (date) =>
  moment(date, constants.DATE_FORMAT).format(constants.DATE_FORMAT);

export default dateFormatter;
