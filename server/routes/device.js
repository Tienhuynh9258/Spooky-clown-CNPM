const express = require('express');
const router = express.Router();
const { getDevice } = require('../controllers/device');
const { setDeviceLevel } = require('../controllers/device');
const { setDeviceStatus } = require('../controllers/device')
//const auth = require('../middleware/auth');

router.post('/', getDevice);
router.post('/setLevel', setDeviceLevel);
router.post('/setStatus', setDeviceStatus);
module.exports = router;

