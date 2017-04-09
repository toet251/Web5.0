const express = require('express');
const controller = require('./user.controller.js');
var router = express.Router();
var auth = require('./auth.service.js');

router.post('/register' , controller.register);
router.post('/login' , controller.login);
router.get('/getAll' , controller.getAll);
router.get('/get/:username' , controller.get);
router.post('/update/:username', controller.update);
router.delete('/delete/:username', controller.delete);

module.exports = router;
