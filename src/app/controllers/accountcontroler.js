const User = require('../models/Users')
var md5 = require('md5');
var moment = require('moment');

class AccountControler {

    updateinfo(req, res, next){
        const fname = req.body.fname;
        const lname = req.body.lname;
        const birthday = req.body.birthday;
        const phonenumber = req.body.phonenumber;
        const address = req.body.address;
        const degree = req.body.degree;
        const subject = req.body.subject;
        const workexper = req.body.workexper;
        const mailcontact = req.body.mailcontact;
        const introduce = req.body.introduce;
        const username = req.session.user;
        console.log(username);
        User.findOneAndUpdate({'username': username}, {firstname:fname, lastname:lname, date:birthday, phone_number:phonenumber, address:address, degree:degree, subject:subject
            ,work_experience:workexper,introduce:introduce,mail_contact:mailcontact
        } , {upsert: true}, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.redirect('/account');;
        });
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

                var role = user.role;
                if(role == 1){
                    var teacher = true;
                }else{
                    var teacher = false;
                }
                
                res.render('account' , { meslogin: true ,img, teacher ,firstname, lastname, email, introduce, phonenumber, fomatted_date, address, degree, workexper, subject, mailcontact, revenue, avatar} );
            })
        }else{
            res.render('login',{ layout : false , mes: false , mes1: false});
        }
        // res.render('account' , { meslogin: true } );
    }
}

module.exports = new AccountControler;