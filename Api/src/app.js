const express = require('express');
const cors = require('cors');
const router = require('./router');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;