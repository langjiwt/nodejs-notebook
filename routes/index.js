var express = require('express');
var router = express.Router();
var account = require('./account');
var admin = require('./admin');
// var app = require('../app');

module.exports = function(app){
    app.use('/account', account);
    app.use('/admin', admin);
};