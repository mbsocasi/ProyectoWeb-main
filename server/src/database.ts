import mysql from 'mysql2/promise';
import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {
        
        connection.release();
        console.log('DB conectada');
    });


export default pool;

