const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check } = require('express-validator');

const { getAuthUser, loginUser } = require('../controllers/auth');

// @route     GET api/auth
// @desc      Get auth user
// @access    Private
router.get('/', auth, getAuthUser);

// @route     POST api/auth
// @desc      Authenticate user & get token
// @access    Public
router.post(
  '/',
  [check('email', 'Please include a valid email').isEmail(), check('password', 'Password is required').exists()],
  loginUser
);

module.exports = router;
