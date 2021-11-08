const User = require('../models/Users')
const Course = require('../models/Course')
var md5 = require('md5');
var moment = require('moment');

class ShowCourse {

    index(req, res){
        Course.find({course_status: 1 }).exec((err, course)=>{
            course = course.map(course => course.toObject())
                        for (let i = 0; i < course.length; i++) {
                            course[i].courseimage = "data:image/"+course[i].courseimage.contentType+";base64,"+course[i].courseimage.data.toString('base64');
                        }
                        
                res.render('courses' , { course } );
            })
        
        // res.render('account' , { meslogin: true } );
    }
}

module.exports = new ShowCourse;