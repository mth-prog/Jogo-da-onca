require('dotenv').config();
const app = require('./app.js');

const PORT = process.env.PORTA;

app.listen(PORT, () => console.log('running'));