import { object } from 'yup';

const createSchema = (fields) => object().shape(fields);

export default createSchema;
