/**
 * Created by Chris on 2017/7/12.
 */
var express = require("express");
var account = require("../controller/account");
var router = express.Router();


router.route('/register')
    .get(function(req, res){
        res.render('account/register', {title: '注册'});
    })
    .post(account.register);

module.exports = router;