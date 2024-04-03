// lib/dbPool.js
import mysql from 'mysql';
import { promisify } from 'util';

const pool = mysql.createPool({
    host: 'mypersonalwebsite.cb0uoygc4usx.us-east-2.rds.amazonaws.com',
    user: 'personal',
    password: 'Tiantian9!',
    database: 'personaldb'
});

export const poolQuery = promisify(pool.query).bind(pool);
