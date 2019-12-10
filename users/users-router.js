const router = require('express').Router();

const dbUser = require('./users-model');

router.get('/', (req, res) => {
  dbUser.find()
    .then(user => {
      res.json(user)
    })
    .catch(err => res.json(err));
});

module.exports = router;