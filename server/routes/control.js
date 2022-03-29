const express = require('express');
const router = express.Router();
const { setControl } = require('../controllers/control');


router.post('/', setControl);
module.exports = router;

