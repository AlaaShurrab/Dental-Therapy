import { readSqlFile } from '../connect';

const createTypes = async () => readSqlFile(`${__dirname}/types.sql`);
const createAutoUpdateTrigger = async () =>
  readSqlFile(`${__dirname}/auto-update-at.sql`);

export default {
  createTypes,
  createAutoUpdateTrigger,
};
