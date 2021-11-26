const User = require('../models/Users')
const Course = require('../models/Course')
var md5 = require('md5');
var moment = require('moment');

class ShowCourse {


    addmember(req,res,next){
        if(req.session.user){
            var courseid = req.body.course_id;
            Course.update({'_id': courseid}, {$push: {member:{student: req.session.user , complete: 0}}})
            .then(()=> res.redirect('/mycourse'))
            .catch(next)
        }else{
            res.render('login',{ layout : false , mes: false , mes1: false});
        }
        
    }



    showcoursedetail(req,res,next){
        var courseid = req.params.id;
        var checkpay = true;
        if(req.session.user){
            Course.findOne({'_id':courseid}).exec((err, course)=>{
                course = course.toObject();   
                course.courseimage = "data:image/"+course.courseimage.contentType+";base64,"+course.courseimage.data.toString('base64');
                course.openday = moment(course.openday).format('DD-MM-YYYY');
                course.endday = moment(course.endday).format('DD-MM-YYYY');
               
                for(let k = 0; k < course.member.length; k++){
                    if(course.member[k].student == req.session.user){
                        checkpay = false;
                        
                    }
                }
                
                Course.find({ $and: [ {'_id':{$ne:courseid}} , {'course_status':1} ]}).limit(4).exec((err,courses)=>{
                    courses = courses.map(courses => courses.toObject())
                    for (let i = 0; i < courses.length; i++) {
                        courses[i].courseimage = "data:image/"+courses[i].courseimage.contentType+";base64,"+courses[i].courseimage.data.toString('base64');
                    }
                    res.render('coursedetail' , {checkpay ,layout : false,meslogin: true, course, courses});
                })
                
            })
            
        }else{
            Course.findOne({'_id':courseid}).exec((err, course)=>{
                course = course.toObject();   
                course.courseimage = "data:image/"+course.courseimage.contentType+";base64,"+course.courseimage.data.toString('base64');
                course.openday = moment(course.openday).format('DD-MM-YYYY');
                course.endday = moment(course.endday).format('DD-MM-YYYY');
                Course.find({ $and: [ {'_id':{$ne:courseid}} , {'course_status':1} ]}).limit(4).exec((err,courses)=>{
                    courses = courses.map(courses => courses.toObject())
                    for (let i = 0; i < courses.length; i++) {
                        courses[i].courseimage = "data:image/"+courses[i].courseimage.contentType+";base64,"+courses[i].courseimage.data.toString('base64');
                    }
                    res.render('coursedetail' , {checkpay,layout : false,meslogin: false, course, courses});
                })
            })
        }
    }

    index(req, res){
        Course.find({course_status: 1 }).exec((err, course)=>{
            course = course.map(course => course.toObject())
                        for (let i = 0; i < course.length; i++) {
                            course[i].courseimage = "data:image/"+course[i].courseimage.contentType+";base64,"+course[i].courseimage.data.toString('base64');
                        }
                if(req.session.user){ 
                    res.render('courses' , { course, meslogin: true} );
                }else{
                    res.render('courses' , { course, meslogin: false} );
                }
            })
        
        // res.render('account' , { meslogin: true } );
    }
}

module.exports = new ShowCourse;