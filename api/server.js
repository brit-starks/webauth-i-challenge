const express = require('express');
const helmet = require('helmet');

const apiRouter = require('../api/api-router');

const server = express();

server.use(helmet());

server.use(express.json());

server.use('/api', apiRouter);

module.exports = server;