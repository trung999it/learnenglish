const User = require('../models/Users')
var md5 = require('md5');
class CreateAccountController {


    create(req , res, next){
        const email = req.body.email;
        const fname = req.body.fname;
        const lname = req.body.lname;
        let password = req.body.password;
        const pwmd5 = md5(password);
        const role = req.body.role;
        User.findOne({username: email}).exec((err,user)=>{
            if(user){
                res.render('createaccount', { layout : false , mes: true});
            }else{
                
                const newuser = new User({
                    role:role,
                    username:email,
                    password:pwmd5,
                    firstname:fname,
                    lastname:lname,
                    
                })
                newuser.save().then((value)=>{
                    console.log(value);
                }).catch(value=> console.log(value));
                // res.render('login',{ layout : false , mes: true, mes1: false});
                res.redirect('/login');
            }
        })
    }

    index(req, res){
        res.render('createaccount' ,  { layout : false , mes: false})
    }
}

module.exports = new CreateAccountController;