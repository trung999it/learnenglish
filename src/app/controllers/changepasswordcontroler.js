const User = require('../models/Users')
var md5 = require('md5');
var moment = require('moment');

class ChangePassWordControler {


    chanepassword(req, res, next){
        var username = req.session.user;
        var oldpass = req.body.oldpass;
        var password = md5(oldpass);
        var newpass = req.body.newpass;
        var newpassword = md5(newpass);
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
            var checkpass = user.password;
            if(checkpass == password){
                User.findOneAndUpdate({'username': username}, {password:newpassword} , {upsert: true}, function(err, doc) {
                    if (err) return res.send(500, {error: err});
                    return res.render('changepassword' , {messucess:true,meserr:false , meslogin: true , img ,firstname, lastname, email, avatar});;
                });
            }else{
                return res.render('changepassword', {meserr:true,messucess:false , meslogin: true , img ,firstname, lastname, email, avatar});
            }
        })
        
    }



    index(req , res , next){
        if(req.session.user){
            var username = req.session.user;
            User.findOne({'username': username}).exec((err, user)=>{
                let image = user.image;
                var role = user.role;
                if(role == 1){
                    var teacher = true;
                }else{
                    var teacher = false;
                }
            
                var avatar = false;
                if(user.checknullimage == 0){
                    avatar = true;
                }else{
                    var img = "data:image/"+image.contentType+";base64,"+image.data.toString('base64');
                }
                var firstname = user.firstname;
                var lastname = user.lastname;
                var email = user.username;
                res.render('changepassword' , { meslogin: true , teacher, img ,firstname, lastname, email, avatar} );
            })
        }else{
            res.render('login',{ layout : false , mes: false , mes1: false});
        }

    }
}

module.exports = new ChangePassWordControler;