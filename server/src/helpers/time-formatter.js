import moment from 'moment';

import * as constants from '../constants';

const timeFormatter = (time) =>
  moment(time, constants.TIME_FORMAT).format(constants.TIME_FORMAT);

export default timeFormatter;
