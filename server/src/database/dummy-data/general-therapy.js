import { query } from '../connect';

const createTherapy = async ({ name, price }) => {
  const sql = `INSERT INTO general_therapy(
    name,
    price
  ) VALUES (
    $1,
    $2
    ) RETURNING *`;
  const res = await query(sql, [name, price]);
  return res.rows[0];
};

const createGeneralTherapy = async () => {
  const therapy1 = await createTherapy({
    name: 'teeth cleaning',
    price: '30',
  });

  const therapy2 = await createTherapy({
    name: 'teeth whitening',
    price: '1500',
  });

  const therapy3 = await createTherapy({
    name: 'teeth polishing',
    price: '1500',
  });

  return {
    therapy1,
    therapy2,
    therapy3,
  };
};

export default createGeneralTherapy;
