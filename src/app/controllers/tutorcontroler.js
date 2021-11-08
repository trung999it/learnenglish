const User = require('../models/Users')
var md5 = require('md5');
var moment = require('moment');

class TutorControler {

    index(req, res){
            User.find({ $and : [{role: 1},{create_course_status:1}] }).exec((err, user)=>{
                
                user = user.map(user => user.toObject())
                        for (let i = 0; i < user.length; i++) {
                            user[i].image = "data:image/"+user[i].image.contentType+";base64,"+user[i].image.data.toString('base64');
                        }
                        
                res.render('tutor' , { user } );
            })
        
        // res.render('account' , { meslogin: true } );
    }
}

module.exports = new TutorControler;