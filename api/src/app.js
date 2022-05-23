const express = require('express');
const server = express();
const form = require('./routes/form');
const notice = require('./routes/notice');
server.use(express.json());

server.use('/form', form);
server.use('/notice', notice);

module.exports = server;