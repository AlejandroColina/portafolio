const express = require('express');
const server = express();
const form = require('./routes/form');
server.use(express.json());

server.use('/prueba', form);

module.exports = server;