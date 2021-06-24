import { readSqlFile } from '../connect';

const createTypes = async () => readSqlFile(`${__dirname}/types.sql`);

export default {
  createTypes,
};
