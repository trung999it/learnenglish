const User = require('../models/Users')
var md5 = require('md5');
var moment = require('moment');

class UserManagement {

    updatestatus(req, res, next){
        var id = req.body.custId;
        var status = req.body.createcoursestats;
        User.findOneAndUpdate({'_id': id}, {create_course_status: status } , {upsert: true}, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.redirect(id);
        });     
    
    }



    showdetail(req, res , next){
        if(req.session.user){
            var id = req.params.id;
            User.findOne({'_id': id}).exec((err, user)=>{
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
                var status = user.create_course_status;
                if(revenue == null || revenue == ""){
                    revenue = 0;
                }

                var userid = user._id;
                res.render('userdetail' , {layout : false,avatar,status,userid, img ,firstname, lastname, email, introduce, phonenumber, fomatted_date, address, degree, workexper, subject, mailcontact, revenue} );
            })         
        }else{
            res.render('login',{ layout : false , mes: false , mes1: false});
        }
        
    }



    index(req, res , next){
        if(req.session.user){
            User.find({$or:[{role: "1"},{role:"2"}]},(err , user) =>{
                user = user.map(user => user.toObject())
                res.render('usermanagemant' , { layout : false , user: user} ); 
            })
            
        }else{
            res.render('login',{ layout : false , mes: false , mes1: false});
        }
    }
}

module.exports = new UserManagement;