require('dotenv').config();
const app = require('./app.js');
const http = require('http');

const PORT = process.env.PORTA;
const server = http.createServer(app);


server.listen(PORT, () => console.log('running'));
