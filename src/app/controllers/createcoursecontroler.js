const User = require('../models/Users')
const Course = require('../models/Course')
var md5 = require('md5');
var moment = require('moment');
var multer = require('multer')
var path = require('path')
var fs = require('fs')
const upload = multer({ dest: 'uploads/' })
class CreateCourseControler {

    addvideo(req,res,next){
        var courseid = req.body.courseid;
        var videotitle = req.body.videotitle;
        var videoid = req.body.videoid;
        var video = {title: videotitle , idvideo: videoid}
        Course.findOneAndUpdate({'_id': courseid}, {$push:{listvideo:video}} , {upsert: true}, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.redirect('/coursemanagement/'+courseid);;
        });
    }

    updatelesson(req,res,next){
        var courseid = req.body.courseidhiden;
        var notification = req.body.notification;
        var exercise = req.body.exercise;
        Course.findOneAndUpdate({'_id': courseid}, {notification:notification,exercise: exercise} , {upsert: true}, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.redirect('/coursemanagement/'+courseid);;
        });
    }




    getcoursedetail(req,res,next){
        if(req.session.user){
            var username = req.session.user;
            var courseid = req.params.id;
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

                Course.findOne({'_id':courseid}).exec((err, course)=>{
                    course =  course.toObject();
                    var openday = moment(course.openday).format('DD-MM-YYYY');
                    var endday = moment(course.endday).format('DD-MM-YYYY');

                    var notification = course.notification;
                    if(notification == "" || notification == null){
                        var checknullnotification = true;
                    }
                    var exercise = course.exercise;
                    if(exercise == "" || exercise == null){
                        var checknullexercisen = true;
                    }
                    res.render('teachercoursedetail' ,{ meslogin: true, layout : false ,checknullnotification,checknullexercisen ,img ,firstname, lastname, email, avatar, course , openday ,endday }) 
                })
            })
            
        }else{
            res.render('login',{ layout : false , mes: false , mes1: false});
        }

    }

    createcourse(req,res,next){
        
        if(req.session.user){
            var author = req.session.user;
            var coursename = req.body.coursename;
            
                var img = fs.readFileSync(req.file.path);
                var encode_image = img.toString('base64')
                var final_image = {
                    data: img,
                    contentType: req.file.mimetype,
                    image: new Buffer.from(encode_image, 'base64')
                };
            
            var idvideointro = req.body.videointro;
            var price = req.body.price;
            var description = req.body.description;
            var required = req.body.required;
            var gained = req.body.gained;

            var openday = req.body.openday;
            var endday = req.body.endday;

            var monday = req.body.inlineCheckboxMonday;
            var tuesday = req.body.inlineCheckboxTuesday;
            var wednesday = req.body.inlineCheckboxWednesday;
            var thursday = req.body.inlineCheckboxThursday;
            var friday = req.body.inlineCheckboxFriday;
            var saturday = req.body.inlineCheckboxSaturday;
            var Sunday = req.body.inlineCheckboxSunday;
            var time = req.body.timetb;
            var timetable = "";
            if(monday != undefined){
                timetable = timetable+monday;
            }

            if(tuesday != undefined && monday == undefined){
                timetable = timetable+tuesday;
            }else{
                if(tuesday != undefined){
                    timetable = timetable+"-"+tuesday;
                } 
            }

            if(wednesday != undefined && monday == undefined && tuesday == undefined){
                timetable = timetable+wednesday;
            }else{
                if(wednesday != undefined){
                    timetable = timetable+"-"+wednesday;
                } 
            }


            if(thursday != undefined && monday == undefined && tuesday == undefined && wednesday == undefined){
                timetable = timetable+thursday;
            }else{
                if(thursday != undefined){
                    timetable = timetable+"-"+thursday;
                } 
            }


            if(friday != undefined && monday == undefined && tuesday == undefined && wednesday == undefined && thursday == undefined){
                timetable = timetable+friday;
            }else{
                if(friday != undefined){
                    timetable = timetable+"-"+friday;
                }
            }


            if(saturday != undefined && monday == undefined && tuesday == undefined && wednesday == undefined && thursday == undefined && friday == undefined){
                timetable = timetable+saturday;
            }else{
                if(saturday != undefined){
                    timetable = timetable+"-"+saturday;
                }    
            }


            if(Sunday != undefined && monday == undefined && tuesday == undefined && wednesday == undefined && thursday == undefined && friday == undefined && saturday == undefined){
                timetable = timetable+Sunday;
            }else{
                if(Sunday != undefined){
                    timetable = timetable+"-"+Sunday;
                }
            }

            timetable = timetable+"-"+time       
            const NewCourse = new Course({
                coursename:coursename,
                courseimage:final_image,
                idvideointro:idvideointro,
                price:price,
                description:description,
                author:author,
                required:required,
                gained:gained,
                openday:openday,
                endday:endday,
                timetable:timetable,
                
            })
            NewCourse.save().then((value)=>{
                console.log("Successfully!!!");
            }).catch(value=> console.log(value));
            // res.render('login',{ layout : false , mes: true, mes1: false});
            res.redirect('/coursemanagement');
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

                var checkcreatecourse = user.create_course_status;
                if(checkcreatecourse){
                    Course.find({author:username}, (err, course)=>{
                        
                        course = course.map(course => course.toObject())
                        for (let i = 0; i < course.length; i++) {
                            course[i].courseimage = "data:image/"+course[i].courseimage.contentType+";base64,"+course[i].courseimage.data.toString('base64');
                        }
                        res.render('createcourse' , { meslogin: true ,img, course ,firstname, lastname, email, introduce, phonenumber, fomatted_date, address, degree, workexper, subject, mailcontact, revenue, avatar} );
                    })      
                }else{
                    res.render('donotcreatecourse' , { meslogin: true ,img ,firstname, lastname, email, introduce, phonenumber, fomatted_date, address, degree, workexper, subject, mailcontact, revenue, avatar} );
                }
                
            })
        }else{
            res.render('login',{ layout : false , mes: false , mes1: false});
        }
    }
}

module.exports = new CreateCourseControler;