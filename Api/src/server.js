require('dotenv').config();
const app = require('./app.js');
const https = require('https');

const PORT = process.env.PORTA;
const server = https.createServer(app);


server.listen(PORT, () => console.log('running'));
