//  /api/users
const express = require('express');

const dbUser = require('./users-model');


const router = express.Router();


router.get('/', (req, res) => {
  dbUser.find()
    .then(user => {
      res.json(user)
    })
    .catch(err => {res.status(500).json({
      message: 'Failed to retrieve users'
    });
  });
});

// router.get('/:id', (req, res) => {
//   const { id } =req.params;

//   dbUser.findById(id)
//   .then(user => {
//     if (user) {
//       res.json(user)
//     } else {
//       res.status(404).json({
//         message: "Invalid ID given."
//       })
//     }
//   })
//   .catch( err => {
//     res.status(500).json({
//       message: 'Failed to get user'
//     })
//   });
// });

// router.post('/user', (req, res) => {
//   const newUser = req.body;

//   dbUser.insert(newUser)
//     .then(user => {
//       res.status(201).json(user);
//     })
//     .catch( err => {
//       res.status(500).json({
//         message: 'Failed to create new user'
//       });
//     });
// });

module.exports = router;