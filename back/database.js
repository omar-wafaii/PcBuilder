const dotenv = require('dotenv');
const Pool = require("pg").Pool;
dotenv.config();


const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_host,
    database: process.env.DATABASE_database,
    password: process.env.DATABASE_password,
    port: process.env.DATABASE_port,
});

pool
    .query(`SELECT * FROM ${table} WHERE id FROM 0 to 20`)

pool.connect();

module.exports = pool;