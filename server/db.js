import mysql2 from 'mysql2/promise';


export const connection = await mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '51gr_bit-final',
});