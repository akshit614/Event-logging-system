const express = require('express');
const { queryLogs } = require('../controllers/queryController');
const router = express.Router();

router.get('/logs', queryLogs);

module.exports = router;
