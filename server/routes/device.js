const express = require('express');
const router = express.Router();
const { getDevice } = require('../controllers/device');
const { getDeviceStatus } = require('../controllers/device');
const { getDeviceLevel } = require('../controllers/device');
const { setDeviceLevel } = require('../controllers/device');
//const auth = require('../middleware/auth');

router.post('/', getDevice);
router.post('/status', getDeviceStatus);
router.post('/level', getDeviceLevel);
router.post('/setLevel', setDeviceLevel);
module.exports = router;

