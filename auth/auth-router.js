
const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../users/users-model.js');

const router = express.Router();


router.post('/register', (req, res) => {
  let user = req.body;

  // const hash = bcrypt.hashSync(user.password, 10);
  // user.password = hash;

  User.insert(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch( err => {
      res.status(500).json(err);
    });
});