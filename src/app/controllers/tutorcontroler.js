const User = require('../models/Users')
var md5 = require('md5');
var moment = require('moment');

class TutorControler {


    detail(req,res,next){
        if(req.session.user){
            User.findOne({'_id':req.params.id }).exec((err, user)=>{
                user = user.toObject();   
                user.image = "data:image/"+user.image.contentType+";base64,"+user.image.data.toString('base64');
                res.render('tutordetail' , { layout : false, meslogin: true,user });
            })
        }else{
            User.findOne({'_id':req.params.id }).exec((err, user)=>{
                user = user.toObject();   
                user.image = "data:image/"+user.image.contentType+";base64,"+user.image.data.toString('base64');
                res.render('tutordetail' , { layout : false, meslogin: false,user});
            })
        }
        
    }


    index(req, res){
            User.find({ $and : [{role: 1},{create_course_status:1}] }).exec((err, user)=>{
                
                user = user.map(user => user.toObject())
                        for (let i = 0; i < user.length; i++) {
                            user[i].image = "data:image/"+user[i].image.contentType+";base64,"+user[i].image.data.toString('base64');
                        }
                        if(req.session.user){ 
                            res.render('tutor' , { user ,meslogin: true} );
                        }else{
                            res.render('tutor' , { user ,meslogin: false} );
                        }
            })
        
        // res.render('account' , { meslogin: true } );
    }
}

module.exports = new TutorControler;