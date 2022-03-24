const express = require('express');
const router = express.Router();
const { getControl } = require('../controllers/control');
const { setControl } = require('../controllers/control');


router.post('/', getControl);
router.post('/set', setControl)
module.exports = router;

