const  { Client }  = require('pg')

const databaseConfig = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'rahmatul_backend_2',
    port: 5433,
    password: 'fajri123'
})

module.exports = databaseConfig