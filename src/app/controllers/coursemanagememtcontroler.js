const User = require('../models/Users')
const Course = require('../models/Course')
var md5 = require('md5');
var moment = require('moment');

class ShowCourseAdmin {

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