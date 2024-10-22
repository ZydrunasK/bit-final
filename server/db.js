import mysql2 from "mysql2/promise";

export let connection = null;

try {
    console.log('hi');
    
    connection = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: '51gr_bit-final',
    });
} catch (error) {
    console.log(error);
}

