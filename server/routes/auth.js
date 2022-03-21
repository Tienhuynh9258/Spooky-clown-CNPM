const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check } = require('express-validator');

const { getAuthUser, loginUser,checkLogin ,uploadAvatar} = require('../controllers/auth');

// @route     GET api/auth
// @desc      Get auth user
// @access    Private
router.get('/', auth, getAuthUser);
router.post('/checkLogin',   [check('username', 'Username is required').not().isEmpty(), check('password', 'Password is required').exists()],
 checkLogin);
// @route     POST api/auth
// @desc      Authenticate user & get token
// @access    Public
router.post(
  '/',
  [check('username', 'Username is required').not().isEmpty(), check('password', 'Password is required').exists()],
  loginUser
);
router.post(
  '/upload',
  [check('username', 'Username is required').not().isEmpty()],
  uploadAvatar
);
module.exports = router;
