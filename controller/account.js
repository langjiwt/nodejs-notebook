/**
 * Created by Chris on 2017/7/12.
 */
var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://123.56.192.150:27017/notebook';

var insertData = function (db, callback) {
    var collection = db.collection('user');
    var data = [{'username': 'admin', 'password':'admin'},{'username':'test','password':'123456'}];
    collection.insert(data, function (err, result) {
        if(err){
            console.log('Error:'+err);
            return;
        }
        callback(result);
    });
}




var account = {
    register(req, res, next){
        var username = req.body.username,
            password = req.body.password;

        console.log('data received');
        console.log('username:',username,' password:', password);

        MongoClient.connect(DB_CONN_STR, function (err, db) {
            console.log('connect success');
            insertData(db, function (result) {
                console.log(result);
                db.close();
            });
        });

        res.end('post data received, username:'+username+' password:'+password);
    }
}

module.exports = account;