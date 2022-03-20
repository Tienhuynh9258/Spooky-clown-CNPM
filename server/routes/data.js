const express = require('express');
const router = express.Router();
const { getData } = require('../controllers/data');
const auth = require('../middleware/auth');

router.post('/',auth, getData);
module.exports = router;
