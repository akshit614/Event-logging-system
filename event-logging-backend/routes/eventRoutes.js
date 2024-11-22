const express = require('express');
const { createLog } = require('../controllers/eventController');
const router = express.Router();

router.post('/log', createLog);

module.exports = router;
