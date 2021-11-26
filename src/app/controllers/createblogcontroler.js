const User = require('../models/Users')
const Course = require('../models/Course')
var md5 = require('md5');
var moment = require('moment');
var multer = require('multer')
var path = require('path')
var fs = require('fs')
const upload = multer({ dest: 'uploads/' })
const Blog = require('../models/Blog')
class CreateBlogControler {



    blogdetail(req,res,next){
        if(req.session.user){
            var username = req.session.user;
            User.findOne({'username': username}).exec((err, user)=>{
                let image = user.image;
                var avatar = false;
                if(user.checknullimage == 0){
                    avatar = true;
                }else{
                    var img = "data:image/"+image.contentType+";base64,"+image.data.toString('base64');
                }
                var firstname = user.firstname;
                var lastname = user.lastname;
                var email = user.username;
                var introduce = user.introduce;
                var phonenumber = user.phone_number
                var date = user.date;
                if(date == null || date == ""){
                    var fomatted_date = ""
                }else{
                    var fomatted_date = moment(date).format('YYYY-MM-DD');
                }
                var address = user.address;
                var degree = user.degree;
                var workexper = user.work_experience;
                var subject = user.subject;
                var mailcontact = user.mail_contact;
                var revenue = user.revenue;
                if(revenue == null || revenue == ""){
                    revenue = 0;
                }
                Blog.findOne({'_id': req.params.id}).exec((err, blog)=>{
                    blog = blog.toObject();
                    blog.image = "data:image/"+blog.image.contentType+";base64,"+blog.image.data.toString('base64');
                    res.render('teacherblogdetail' , { meslogin: true , blog ,img ,firstname, lastname, email, introduce, phonenumber, fomatted_date, address, degree, workexper, subject, mailcontact, revenue, avatar} );
                })
            })
        }else{
            res.render('login',{ layout : false , mes: false , mes1: false});
        }
    }


    deleteblog(req,res,next){
        var idblog = req.body.idblog;
        Blog.deleteOne({'_id':idblog})
        .then(()=> res.redirect('back'))
        .catch(next)
    }


    createblog(req,res,next){
        var blogtittle = req.body.blogtittle;
        var blogheader = req.body.blogheader;
        var blogcontain = req.body.blogcontain;
        var blogfooter = req.body.blogfooter;
        var author = req.session.user;
        var img = fs.readFileSync(req.file.path);
                var encode_image = img.toString('base64')
                var final_image = {
                data: img,
                contentType: req.file.mimetype,
                image: new Buffer.from(encode_image, 'base64')
        };
        const NewBlog = new Blog({
            blogtittle:blogtittle,
            author:author,
            image:final_image,
            blogheader:blogheader,
            blogcontain:blogcontain,
            blogfooter:blogfooter
        })
        NewBlog.save().then((value)=>{
            console.log("Successfully!!!");
        }).catch(value=> console.log(value));
        // res.render('login',{ layout : false , mes: true, mes1: false});
        res.redirect('back');
    }




    index(req, res){
        if(req.session.user){
            var username = req.session.user;
            User.findOne({'username': username}).exec((err, user)=>{
                let image = user.image;
                var avatar = false;
                if(user.checknullimage == 0){
                    avatar = true;
                }else{
                    var img = "data:image/"+image.contentType+";base64,"+image.data.toString('base64');
                }
                var firstname = user.firstname;
                var lastname = user.lastname;
                var email = user.username;
                var introduce = user.introduce;
                var phonenumber = user.phone_number
                var date = user.date;
                if(date == null || date == ""){
                    var fomatted_date = ""
                }else{
                    var fomatted_date = moment(date).format('YYYY-MM-DD');
                }
                var address = user.address;
                var degree = user.degree;
                var workexper = user.work_experience;
                var subject = user.subject;
                var mailcontact = user.mail_contact;
                var revenue = user.revenue;
                if(revenue == null || revenue == ""){
                    revenue = 0;
                }
                Blog.find({'author': username}).exec((err, blog)=>{
                    blog = blog.map(blog => blog.toObject())
                    res.render('createblog' , { meslogin: true , blog ,img ,firstname, lastname, email, introduce, phonenumber, fomatted_date, address, degree, workexper, subject, mailcontact, revenue, avatar} );
                })
            })
        }else{
            res.render('login',{ layout : false , mes: false , mes1: false});
        }
    }
}

module.exports = new CreateBlogControler;