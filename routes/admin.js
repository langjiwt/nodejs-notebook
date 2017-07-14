/**
 * Created by Chris on 2017/7/13.
 */
var express = require('express');
var router = express.Router();
var admin = require('../controller/admin');

router.get('/login', admin.loginView);
router.post('/login', admin.login);
router.get('/index', admin.index);

module.exports = router;