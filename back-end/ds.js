//arquivo db.js
//configurar a conexão com o pg fazendo o pool
const { Pool } = require('pg')

const pool = new Pool({
        user: 'Professor', //seu usuario do pc
        host: 'localhost',
        database: 'banco_fifa', //nome do seu banco
        password: 'postgres',
        port: 5432, //padrao postgres
})

module.exports = pool;
 