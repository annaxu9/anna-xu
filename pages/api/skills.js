import { poolQuery } from '../../utils/dbPool';

export default async function handler(req, res) {
  try {
    const results = await poolQuery('SELECT * FROM skill ORDER BY level DESC');
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving data' });
  }
}
