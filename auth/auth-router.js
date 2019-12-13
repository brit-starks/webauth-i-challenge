
// api/auth
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const User = require('../users/users-model.js');

const router = express.Router();


router.post('/register', (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  User.insert(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch( err => {
      res.status(500).json(err);
    });
});


router.post('/login', (req, res) => {
  let { username, password } = req.body;

  User.findBy({ username })
  .first()
    .then(user => {
      const token = generateToken(user);

      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
        });
      } else {
        res.status(401).json({
          message: 'Invalid Credentials'
        });
      }
    })
    .catch( err => {
      res.status(500).json({
        err, 
        message: 'Opps, something happened on our end...'
      });
    });
});

function generateToken(user){
  const payload = {
    subject: user.id,
    username: user.username
  }

  const options = {
    expiresIn: '8h'
  };
  return jwt.sign(payload, secrets.jwtSecret, options)
};

router.get('/logout', (req, res) => {
if(req.session) {
  req.session.destroy(err => {
    if(err) {
      res.json({message: 'logout error'})
    } else {
      res.status(200).json({ message: 'You have successfully logged out' })
      // res.status(204).end()
    }
  })
} else {
  res.status(200).json({ message: "You never logged in though..." })
}
})

module.exports = router;