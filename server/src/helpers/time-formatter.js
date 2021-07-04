import moment from 'moment';

const timeFormatter = (time) => moment(time, 'HH:mm:ss').format('HH:mm:ss');

export default timeFormatter;
