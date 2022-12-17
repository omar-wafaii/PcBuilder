const { Pool } = require('pg');

const pool = require('pg').pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'prodata',
    password: 'omarwaf2002',
    port: 5432,
});

pool.connect();

pool
    .query(`SELECT * FROM ${table} WHERE id FROM 0 to 20`)
