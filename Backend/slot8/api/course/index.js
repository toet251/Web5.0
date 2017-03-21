var express = require('express');
var controller = require('./course.controller.js');

var router = express.Router();

router.get('/', controller.getAll);
router.post('/', controller.create);

module.exports = router;
