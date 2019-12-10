const express = require('express');
const helmet = require('helmet');

const userRouter = require('../users/users-router');

const server = express();

server.use(helmet());
server.use('/api/users', userRouter);

server.get('/', (req, res) => {
  res.json({api: "WebAuth-I-Challenge"});
})

module.exports = server;