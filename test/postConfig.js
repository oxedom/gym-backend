const {
    Pool
} = require('pg')

const pool = new Pool({
    user: 'postgres',
    database: 'test_erp',
    password: 'qwer',
    port: 5432,
    host: 'localhost',
})

module.exports = {
    pool
};