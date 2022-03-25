const express = require('express');
const router = express.Router();
const { getHandle } = require('../controllers/handle');
const { setHandle } = require('../controllers/handle');
//const auth = require('../middleware/auth');

router.post('/', getHandle);
router.post('/set', setHandle);
module.exports = router;

