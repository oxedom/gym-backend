const {
    Pool
} = require('pg')

const pool = new Pool({
    user: 'postgres',
    database: 'vas_2000',
    password: 'postgrespassword',
    port: 5433,
    host: 'localhost',
})

module.exports = {
    pool
};