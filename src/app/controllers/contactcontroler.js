const User = require('../models/Users')
var nodemailer = require('nodemailer');


class ContactControler {


    sendmail(req , res){
       var fullname =  req.body.fullname;
       var subject =  req.body.subject;
       var email =  req.body.email;
       var messages =  req.body.messages;
       const option = {
        service: 'gmail',
        auth: {
            user: 'trungb1704864@student.ctu.edu.vn', // email hoặc username
            pass: '8ZND#7cZ' // password
        }
    };
    var transporter = nodemailer.createTransport(option);
    
    transporter.verify(function(error, success) {
        // Nếu có lỗi.
        if (error) {
            console.log(error);
        } else { //Nếu thành công.
            var mail = {
                from: 'trungb1704864@student.ctu.edu.vn', // Địa chỉ email của người gửi
                to: email, // Địa chỉ email của người gửi
                subject: subject, // Tiêu đề mail
                html: '<p>Hello '+fullname+'</p></br>'+'<p>Thank You to contact us <3</p></br><p>Your problem:'+messages+'</p></br> <p></p></p>', // Nội dung mail dạng text
            };
            //Tiến hành gửi email
            transporter.sendMail(mail, function(error, info) {
                if (error) { // nếu có lỗi
                    console.log(error);
                    res.render('contact')
                } else { //nếu thành công
                    res.render('thankyou')
                }
            });
        }
    });
    }


    index(req, res){
        res.render('contact');
    }
}

module.exports = new ContactControler;