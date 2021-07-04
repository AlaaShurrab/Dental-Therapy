import { query } from '../../../database';

const findGeneralSettings = async (client) => {
  const values = [];
  const sql = `
    SELECT
      *
    FROM 
      general_settings ;
  `;

  const res = await query(sql, values, client);
  return res.rows[0];
};

export { findGeneralSettings };
