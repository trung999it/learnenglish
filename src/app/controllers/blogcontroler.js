const User = require('../models/Users')
const Course = require('../models/Course')
var md5 = require('md5');
var moment = require('moment');
var multer = require('multer')
var path = require('path')
var fs = require('fs')
const upload = multer({ dest: 'uploads/' })
const Blog = require('../models/Blog')
class BlogControler {


    report(req,res,next){
        var idblog = req.params.id;
        Blog.findOneAndUpdate({'_id': idblog}, {blogstatus:'report'} , {upsert: true}, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.redirect('back');
        });
    }


    addcomment(req,res,next){
        var idblog = req.params.id;
        var comment = req.body.comment;
        if(req.session.user){
            var cm = {username:req.session.user,com:comment}
            Blog.findOneAndUpdate({'_id': idblog}, {$push:{command:cm}} , {upsert: true}, function(err, doc) {
                if (err) return res.send(500, {error: err});
                return res.redirect('back');
            });
        }else{
            res.redirect('back');
        }
    }


    blogdetail(req,res,next){
        var idblog = req.params.id;
        if(req.session.user){
            Blog.findOne({'_id':idblog}).exec((err, blog)=>{
                blog = blog.toObject();
                blog.image = "data:image/"+blog.image.contentType+";base64,"+blog.image.data.toString('base64');
                blog.updatedAt = moment(blog.updatedAt).format('DD-MM-YYYY');
                Blog.find({'_id':{$ne:idblog}}).exec((err, blogs)=>{
                    blogs = blogs.map(blogs => blogs.toObject())
                    res.render('publicblogdetail', {meslogin: true, blog, blogs })
                })
            })
        }else{
            Blog.findOne({'_id':idblog}).exec((err, blog)=>{
                blog = blog.toObject();
                blog.updatedAt = moment(blog.updatedAt).format('DD-MM-YYYY');
                blog.image = "data:image/"+blog.image.contentType+";base64,"+blog.image.data.toString('base64');
                Blog.find({'_id':{$ne:idblog}}).exec((err, blogs)=>{
                    blogs = blogs.map(blogs => blogs.toObject())
                    res.render('publicblogdetail', {meslogin: false, blog, blogs})
                })
            })
        }
    }



    index(req, res){
        if(req.session.user){
            Blog.find({'blogstatus':{$ne:'report'}}).exec((err, blog)=>{
                blog = blog.map(blog => blog.toObject())
                for (let i = 0; i < blog.length; i++) {
                    blog[i].image = "data:image/"+blog[i].image.contentType+";base64,"+blog[i].image.data.toString('base64');
                }
                res.render('blog' , { meslogin: true, blog} );
            })
        }else{
            Blog.find({'blogstatus':{$ne:'report'}}).exec((err, blog)=>{
                blog = blog.map(blog => blog.toObject())
                for (let i = 0; i < blog.length; i++) {
                    blog[i].image = "data:image/"+blog[i].image.contentType+";base64,"+blog[i].image.data.toString('base64');
                }
                res.render('blog',{ meslogin: false, blog});
            })
        }
        
    }
}

module.exports = new BlogControler;