const User = require('../models/Users')
var md5 = require('md5');
var moment = require('moment');

class AdminControler {

    index(req, res , next){
        res.render('admin' , { layout : false });
    }
}

module.exports = new AdminControler;