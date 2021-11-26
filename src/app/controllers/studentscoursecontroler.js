const User = require('../models/Users')
var md5 = require('md5');
var moment = require('moment');
const Course = require('../models/Course')
class StudentsCourse {


    getcertification(req,res,next){
        if(req.session.user){
            var username = req.session.user;
            var courseid = req.params.id;
            User.findOne({'username': username}).exec((err, user)=>{
                user = user.toObject();
                var fomatted_date = moment(user.date).format('DD-MM-YYYY');
                Course.findOne({'_id': courseid}).exec((err, course)=>{
                    course = course.toObject();
                    var teacher = course.author;
                    User.findOne({'username': teacher}).exec((err, teacher)=>{
                        teacher = teacher.toObject();
                        course.openday =  moment(course.openday).format('DD-MM-YYYY');
                        course.endday =  moment(course.endday).format('DD-MM-YYYY');
                    res.render('certification', { layout : false, user, course,teacher,fomatted_date })
                    })
                })
            })
        }else{
            res.render('login',{ layout : false , mes: false , mes1: false});
        }
    }




    classroom(req,res,next){
        if(req.session.user){
            var video_id = req.params.id;
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

                Course.findOne({'listvideo':{$elemMatch:{'idvideo': video_id}}}).exec((err, course)=>{
                    course = course.toObject();
                    var checkresult;
                    var studentlist = course.member;
                    for( let i = 0 ; i < studentlist.length; i++){
                        if(studentlist[i].student == username){
                            checkresult = studentlist[i].complete;
                        }
                    }
                    res.render('class' , {layout : false,checkresult, course , video_id ,meslogin: true ,img, teacher ,firstname, lastname, email, introduce, phonenumber, fomatted_date, address, degree, workexper, subject, mailcontact, revenue, avatar} );
                })
            })
        }else{
            res.render('login',{ layout : false , mes: false , mes1: false});
        }
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

                
                Course.find({'member':{$elemMatch:{student: username}}}).exec((err, course)=>{
                    // console.log(course);
                   
                    course = course.map(course => course.toObject())
                        for (let i = 0; i < course.length; i++) {
                            course[i].courseimage = "data:image/"+course[i].courseimage.contentType+";base64,"+course[i].courseimage.data.toString('base64');
                            course[i].openday = moment(course[i].openday).format('DD-MM-YYYY');
                            course[i].endday = moment(course[i].endday).format('DD-MM-YYYY');
                    
                        }
                    res.render('studentcourse' , {course,meslogin: true ,img, teacher ,firstname, lastname, email, introduce, phonenumber, fomatted_date, address, degree, workexper, subject, mailcontact, revenue, avatar} );
                    
                    
                    // res.send('ok');
                })
            })
        }else{
            res.render('login',{ layout : false , mes: false , mes1: false});
        }
        // res.render('account' , { meslogin: true } );
    }
}

module.exports = new StudentsCourse;