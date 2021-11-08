const User = require('../models/Users')
var md5 = require('md5');
var moment = require('moment');

class AboutCreateCourseControler {

    index(req , res , next){
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
                res.render('aboutcreatecourse' , { meslogin: true , img ,firstname, lastname, email, avatar} );
            })
        }else{
            res.render('login',{ layout : false , mes: false , mes1: false});
        }

    }
}

module.exports = new AboutCreateCourseControler;