const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { registerUser } = require('../controllers/users');

// @route     POST api/users
// @desc      Register user
// @access    Public
router.post(
  '/',
  [
    check('firstName', 'First name is requied').not().isEmpty(),
    check('lastName', 'Last name is requied').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  ],
  registerUser
);

module.exports = router;
