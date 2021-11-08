const User = require('../models/Users')
var md5 = require('md5');
var moment = require('moment');
var multer = require('multer')
var path = require('path')
var fs = require('fs')
const upload = multer({ dest: 'uploads/' })
class UpdateAvatarControler {


    updateavatar(req, res, next){
        var img = fs.readFileSync(req.file.path);
        var encode_image = img.toString('base64')
        var final_image = {
            data: img,
            contentType: req.file.mimetype,
            image: new Buffer.from(encode_image, 'base64')
        };
        const username = req.session.user;
        User.findOneAndUpdate({'username': username}, {image:final_image,checknullimage: 1} , {upsert: true}, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.redirect('/updateavatar');;
        });
    }

    index(req , res){
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
                var role = user.role;
                if(role == 1){
                    var teacher = true;
                }else{
                    var teacher = false;
                }
                res.render('updateavatar' , { meslogin: true , teacher, img ,firstname, lastname, email, avatar} );
            })
        }else{
            res.render('login',{ layout : false , mes: false , mes1: false});
        }
    }
}

module.exports = new UpdateAvatarControler;