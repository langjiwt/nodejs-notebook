/**
 * Created by Chris on 2017/7/13.
 */
var db = require('../mongodb/db');

var admin = {
    loginView: function(req, res, next){
        res.render('admin/login');
        res.end();
    },
    login: function(req, res, next){

    }
}

module.exports = admin;