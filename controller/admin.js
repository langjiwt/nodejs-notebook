/**
 * Created by Chris on 2017/7/13.
 */
var db = require('../mongodb/db');
var adminModel = require('../models/admin/adminuser')

var admin = {
    loginView: function(req, res, next){
        res.render('admin/login');
        res.end();
    },
    login: function(req, res, next){
        var username, password;

        username = req.body.username;
        password = req.body.password;

        var userAdmin = adminModel.findOne({'username':username}, function (err, result) {
            if(err){
                console.log(err);
                res.send({
                    status: 0,
                    message: 'database query error'
                });
                res.end();
            }
            try{
                var id = result._id;
                console.log(result);
                console.log(id);
                if((username === result.username) && (password ==  result.password)){
                    userAdmin.last_login = new Date();

                    res.redirect('index');
                    adminModel.update({_id: id}, {$set: {last_login: Date.now()}}, function () {
                        console.log('update success');
                    });
                }
                else{
                    res.render('admin/login', {message: 'UserName or PassWord incorrect'});
                    res.end();
                }
            }
            catch (e){
                console.log(e);
            }

        });

        // console.log(userAdmin);




    },
    index: function (req, res, next) {
        res.render('admin/index');
        res.end();
    }
}

module.exports = admin;