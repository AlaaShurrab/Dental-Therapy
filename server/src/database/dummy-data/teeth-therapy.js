import { query } from '../connect';

const createTherapy = async ({ name, price }) => {
  const sql = `INSERT INTO teeth_therapy(
    name,
    price
  ) VALUES (
    $1,
    $2
    ) RETURNING *`;
  const res = await query(sql, [name, price]);
  return res.rows[0];
};

const createTeethTherapy = async () => {
  const therapy1 = await createTherapy({
    name: 'amalgam',
    price: '30',
  });

  const therapy2 = await createTherapy({
    name: 'removal',
    price: '30',
  });

  const therapy3 = await createTherapy({
    name: 'some operation',
    price: '1500',
  });

  return {
    therapy1,
    therapy2,
    therapy3,
  };
};

export default createTeethTherapy;
