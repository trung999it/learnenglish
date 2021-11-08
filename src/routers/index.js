const { render } = require('node-sass');
const createaccount = require('./createaccount.route');
const User = require('../app/models/Users')
var md5 = require('md5');
const { connections } = require('mongoose');
const login = require('./login.route');
const account = require('./account.route');
const avatar = require('./updateavatar.route');
const changepassword = require('./changepassword.route');
const contactcontroler = require('./contact.route')
const aboutcreatecourse = require('./aboutcreatecourse.route')
const admincontroler = require('./admin.route')
const usermanagement = require('./usermanagement.route')
const coursemanagement = require('./createcourse.route')
const tutorcontroler = require('./tutor.route')
const coursecontroler = require('./course.route')
const admincoursemanagement = require('./coursemanagement.route')

function route(app){
    app.get('/', (req, res) => {
      if(req.session.user){
        res.render('home' , {meslogin: true})
      }else{
        res.render('home' , {meslogin: false})
      }
    })
      
      app.get('/logout', (req, res)=> {
        delete req.session.user;
        req.session.destroy(function(err) {
          return res.render('home' , {meslogin: false})
        })
      })

      app.use('/dashboard', admincontroler)

      app.use('/usermanagement', usermanagement)

      app.use('/aboutcreatecourse' , aboutcreatecourse)

      app.use('/login', login)
      
      app.use('/contact', contactcontroler)
      
      app.use('/courses', coursecontroler)
      
      app.use('/course_management' , admincoursemanagement)


      app.use('/tutor', tutorcontroler)

      app.get('/thankyou', (req , res)=>{
        res.render('thankyou');
      })

      app.use('/coursemanagement' , coursemanagement)

      app.use('/account', account)

      app.use('/updateavatar', avatar)

      app.use('/changepassword',changepassword )

      app.get('/exercise', (req, res) => {
        res.render('exercise');
      })
      
      app.get('/coursedetail', (req, res) => {
        res.render('coursedetail');
      })
      
      app.get('/streamroom', (req, res) => {
        res.render('streamroom',  { layout : false });
      })

      app.use('/createaccount', createaccount)


      
}

module.exports = route;
