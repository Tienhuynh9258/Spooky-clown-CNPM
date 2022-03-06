const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { registerUser, checkRegister } = require('../controllers/users');

router.post('/checkRegister',   
[
  check('username', 'User name is requied').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
],
 checkRegister);
// @route     POST api/users
// @desc      Register user
// @access    Public
router.post(
  '/',
  [
    check('username', 'User name is requied').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  ],
  registerUser
);

module.exports = router;
