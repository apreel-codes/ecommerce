//connecting to the database

<<<<<<< HEAD
// this is just for testing
const client = new Client({
    host: "localhost",
=======

const { Pool } = require('pg');

const pool = new Pool({
>>>>>>> 127a6d8 (Client structure)
    user: "postgres",
    password: "apreel",
    host: "localhost",
    port: 5432,
    database: "ecommerce"
})

module.exports = pool;