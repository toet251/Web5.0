var express = require('express');
var controller = require('./post.controller.js');
var router = express.Router();
var auth = require('../user/auth.service.js');


router.post('/create', auth.hasRole('user'), controller.create);

router.get('/like/:_id', auth.hasRole('user'), controller.like);
router.get('/unlike/:_id', auth.hasRole('user'), controller.unlike);
router.post('/comment/:_id', auth.hasRole('user'), controller.comment);

router.get('/getAll', controller.getAll);
router.get('/get/:_id', controller.get);
router.post('/update/:_id', controller.update);
router.delete('/delete/:_id', controller.delete);

module.exports = router;
