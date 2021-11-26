const User = require('../models/Users')
const Course = require('../models/Course')
var md5 = require('md5');
var moment = require('moment');

class ShowCourseAdmin {


    chanestatus(req,res,next){
        var coursestatus = req.body.coursestatus;
        if(coursestatus == 1){
            Course.findOneAndUpdate({'_id': req.params.id}, {course_status: req.body.coursestatus, active_status: 'working'})
            .then(()=> res.redirect('back'))
            .catch(next)
        }else{
            Course.findOneAndUpdate({'_id': req.params.id}, {course_status: req.body.coursestatus, active_status: 'prepare'})
            .then(()=> res.redirect('back'))
            .catch(next)
        }
        
    }


    detail(req,res,next){
        var courseid = req.params.id;

        Course.findOne({'_id':courseid}).exec((err, course)=>{
            course = course.toObject();   
            course.courseimage = "data:image/"+course.courseimage.contentType+";base64,"+course.courseimage.data.toString('base64');
            course.openday = moment(course.openday).format('DD-MM-YYYY');
            course.endday = moment(course.endday).format('DD-MM-YYYY'); 
            res.render('admincoursemanagement' , { layout: false, course })
        })
    }

    index(req, res){
        Course.find({}).exec((err, course)=>{
            course = course.map(course => course.toObject())
                        for (let i = 0; i < course.length; i++) {
                            course[i].courseimage = "data:image/"+course[i].courseimage.contentType+";base64,"+course[i].courseimage.data.toString('base64');
                            course[i].openday = moment(course[i].openday).format('DD-MM-YYYY');
                            course[i].endday = moment(course[i].endday).format('DD-MM-YYYY');
                        }
                        
                res.render('coursemanagement' , { layout: false, course } );
            })
        
        // res.render('account' , { meslogin: true } );
    }
}

module.exports = new ShowCourseAdmin;