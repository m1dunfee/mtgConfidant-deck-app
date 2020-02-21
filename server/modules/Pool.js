const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'mtgConfidant',
    host: 'localhost',
    port: '5432'
}

const pool = new Pool(config);

module.exports = pool;