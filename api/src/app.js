const express = require('express');
const server = express();
const cors = require('cors');
const form = require('./routes/form');
const notice = require('./routes/notice');
const cards = require('./routes/cards');
const certificados = require('./routes/certificados');
const visitors = require('./routes/visitors');
const admin = require('./routes/validateUser');
const bodyParser = require('body-parser');
// const { CORS_URL } = process.env;
server.use(express.json());
server.use(cors());

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use('/form', form);
server.use('/notice', notice);
server.use('/cards', cards);
server.use('/certificates', certificados);
server.use('/visitors', visitors);
server.use('/admin', admin);

server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = server;