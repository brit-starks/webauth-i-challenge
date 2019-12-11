const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const sessionConfig = {
  name: 'bats-cookie', 
  secret:  'Shh, it\'s a secret',
  cookie: {
    maxAge: 1000 * 30,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveOnInitialized: false
};

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(session(sessionConfig));
};
