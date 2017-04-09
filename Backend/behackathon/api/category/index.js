var express = require('express');
var controller = require('./category.controller.js');
var router = express.Router();
var auth = require('../user/auth.service.js');

router.get('/getAll', controller.getAll);
router.post('/create', controller.create);

module.exports = router;
