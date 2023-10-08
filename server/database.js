//connecting to the database

const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "apreel",
    host: "localhost",
    port: 5432,
    database: "ecommerce"
})

module.exports = pool;