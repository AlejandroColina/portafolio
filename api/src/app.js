const express = require('express');
const server = express();
const cors = require('cors');
const form = require('./routes/form');
const notice = require('./routes/notice');
const cards = require('./routes/cards');
const certificados = require('./routes/certificados');
const visitors = require('./routes/visitors');
const admin = require('./routes/validateUser');
server.use(express.json());
server.use(cors());

server.use('/form', form);
server.use('/notice', notice);
server.use('/cards', cards);
server.use('/certificates', certificados);
server.use('/visitors', visitors);
server.use('/admin', admin);

module.exports = server;