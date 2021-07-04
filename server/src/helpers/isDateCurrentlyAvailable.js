import moment from 'moment';

const isDateCurrentlyAvailable = (date) => moment().diff(date, 'days') <= 0;

export default isDateCurrentlyAvailable;
