const User = require('../models/Users')
var md5 = require('md5');

class LoginControler{
    login(req, res){
        const email = req.body.emailaddress;
        let password = req.body.password;
        const pwmd5 = md5(password);
        User.findOne({username: email}).exec((err,user)=>{
          if(user){
              if(user.password == pwmd5){
                // req.flash("sucess_msg", "Login sucessfully!!!.")
                req.session.user = email;
                // res.render('home' , {meslogin: true})
                if(user.role == 3){
                  res.render('admin' , { layout : false })
                }else{
                  res.redirect('/');
                }
                
                // res.render('home', {meslogin: true})
              }else{
                res.render('login',  { layout : false , mes: false , mes1: true});
              }
          }else{
              res.render('login',  { layout : false , mes: false ,mes1: true});
          }
      })
    }



    index(req , res){
        res.render('login',  { layout : false , mes: false , mes1: false});
    }
}


module.exports = new LoginControler;
