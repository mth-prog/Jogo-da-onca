// conexao com bd 
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host: 'jogodaonca.cveloztfcqty.us-east-1.rds.amazonaws.com' ,
    user: 'MasterOnca',
    password: 'onca1020' ,
    port: '5432',
    database: 'JogoOnca',
    ssl: {
        require: true, 
        rejectUnauthorized: false
    }
    
});

// const pool = new Pool({
//     host: process.env.HOST ,
//     user: process.env.USER,
//     password:process.env.PASSWORD ,
//     port: process.env.PORT,
//     database: process.env.DATABASE,
//     ssl: {
//         require: JSON.parse(process.env.SSL_REQUIRE), 
//         rejectUnauthorized: JSON.parse(process.env.REJECT_UNAUTHORIZED)
//     }
    
// });


// const pool = new Pool({
//     host: 'localhost' ,
//     user: 'postgres',
//     password: 'mateus',
//     port: '5432',
//     database: 'postgres',
//     // ssl: {
//     //     require: JSON.parse(process.env.SSL_REQUIRE), 
//     //     rejectUnauthorized: JSON.parse(process.env.REJECT_UNAUTHORIZED)
//     // }
    
// });


module.exports = pool;

