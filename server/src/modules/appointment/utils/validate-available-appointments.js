import dateValidation from '../../../helpers/date-validation';

const validate = (data) => {
  dateValidation(data.targetedDate, 'targetedDate').required();
};

export default validate;
