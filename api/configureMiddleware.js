const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const sessionConfig = {
  name: 'bats-cookie', //default is named sid, easier for hackers
  secret:  'Shh, it\'s a secret',  // what we use to encrypt and decrypt the cookie
  cookie: {
    maxAge: 1000 * 30,  // 30s how long you want the session to stay open (milliseconds)
    secure: false,  // Can you send the cookie over an un-encrypted connection? (HTTP) change to 'True' in production
    httpOnly: true // always 'true', this means "This cookie cannot be accessed with javaScript"
  },
  resave: false, // do we want to recreate a session although nothing has changed, no, avoid chatter to our session storage
  saveOnInitialized: false //this needs to be dynamically changed. GDPR Compliance, there are laws against setting cookies automatically
                           // dynamically we must set options for user to accept if they want to  
};

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(session(sessionConfig));
};
