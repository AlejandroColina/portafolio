const express = require('express');
const server = express();
const cors = require('cors');
const form = require('./routes/form');
const notice = require('./routes/notice');
const cards = require('./routes/cards');
const certificados = require('./routes/certificados');
server.use(express.json());
server.use(cors());

server.use('/form', form);
server.use('/notice', notice);
server.use('/cards', cards);
server.use('/certificates', certificados);

module.exports = server;