import mysql from 'mysql';
import { promisify } from 'util';

const pool = mysql.createPool({
    host: 'mypersonalwebsite.cb0uoygc4usx.us-east-2.rds.amazonaws.com',
    user: 'personal',
    password: 'Tiantian9!',
    database: 'personaldb'
});

const poolQuery = promisify(pool.query).bind(pool);

export default async function handler(req, res) {
  try {
    const results = await poolQuery('SELECT * FROM skill');
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving data' });
  }
}
