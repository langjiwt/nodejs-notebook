/**
 * Created by Chris on 2017/7/13.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var adminUserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    last_login: Date
});

var AdminUser = mongoose.model('admin_user', adminUserSchema);

module.exports = AdminUser;