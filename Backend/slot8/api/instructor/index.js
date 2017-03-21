var express = require('express');
var controller = require('./instructor.controller.js');

var router = express.Router();

router.get('/', controller.getAll);
router.post('/', controller.create);

module.exports = router;
