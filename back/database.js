const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'prodata',
    password: 'omarwaf2002',
    port: 5432,
});
pool.connect();

module.exports = pool;