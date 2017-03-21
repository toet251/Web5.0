const express = require('express');
const controller = require('./auth.js');

var router = express.Router();

router.post('/' , controller.auth);

module.exports = router;
