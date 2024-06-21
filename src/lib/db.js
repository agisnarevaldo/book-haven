import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

export const query = (query, values) => new Promise((resolve, reject) => {
    pool.execute(query, values, (error, results) => {
        if (error) return reject(error);
        resolve(results);
    });
});

export default pool;