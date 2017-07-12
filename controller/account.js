/**
 * Created by Chris on 2017/7/12.
 */
var express = require('express');
var router = express.Router();

class account{
    register(req, res, next){
        var username = req.body.username,
            password = req.body.password;

        console.log('data received');
        console.log('username:',username,' password:', password);

        res.end('post data received, username:'+username+' password:'+password);
    }
}

export default new account();