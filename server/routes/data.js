const express = require('express');
const router = express.Router();
const { getData } = require('../controllers/data');

router.post('/', getData);
module.exports = router;

