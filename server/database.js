const { Client } = require('pg')

// this is just for testing
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "rootData",
    database: "postgres"
})

