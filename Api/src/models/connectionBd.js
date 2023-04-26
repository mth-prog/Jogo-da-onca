// conexao com bd 
require('dotenv').config();
const { Pool } = require('pg');

// const pool = new Pool({
//     host: 'localhost',
//     user: 'postgres',
//     password:'mateus',
//     port: 5432,
//     Database: 'postgres'
// });


const pool = new Pool({
    host: 'jogodaonca.cveloztfcqty.us-east-1.rds.amazonaws.com',
    user: 'AdminOnca',
    password:'10onca20',
    port: 5432,
    Database: 'bd_JogoOnca'
});




// // // apenas testando a conexão
async function selectCustomers() {
    const client = await pool.connect();
    const res = await client.query('SELECT * FROM jogador');
    return console.log(res);
}

selectCustomers();



module.exports = pool;

