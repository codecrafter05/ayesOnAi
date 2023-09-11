// file : AyesOnAi\express-AyesOnAi\routes\users.js

var express = require('express');
var router = express.Router();
const usersController = require('../controllers/api/users');

router.delete('/:id', usersController.deleteUser);
router.get('/:id', usersController.getUserById);
router.put('/update/:id', usersController.updateUserById);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
