const User = require('../models/Users')
const Course = require('../models/Course')
var md5 = require('md5');
var moment = require('moment');
var multer = require('multer')
var path = require('path')
var fs = require('fs')
const upload = multer({ dest: 'uploads/' })
const Blog = require('../models/Blog')
class BlogManagementControler {


    index(req, res){
        if(req.session.user){
            Blog.find({}).exec((err, blogs)=>{
                blogs = blogs.map(blogs => blogs.toObject())
                res.render('blogmanagementadmin' , { meslogin: true,layout : false, blogs} );
            })
        }else{
            res.render('login',{ layout : false , mes: false , mes1: false});
        }
        
    }
}

module.exports = new BlogManagementControler;