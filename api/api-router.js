const express = require('express');

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
// Remember, must be written this way or it'll throw fit
const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);


router.get('/', (req, res) => {
  res.json({api: "WebAuth-I-Challenge"});
})


module.exports = router;