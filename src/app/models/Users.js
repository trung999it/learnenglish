const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    role: { type: Number, default: '1' },
    username: { type: String, default: '' },
    password: { type: String, default: '' },
    firstname: { type: String, default: '' },
    lastname: { type: String, default: '' },
    date: { type: Date, default: '' },
    phone_number: { type: String, default: '' },
    address: { type: String, default: '' },
    image: { data: Buffer, contentType: String, default:''},
    degree: { type: String, default: '' },
    subject: { type: String, default: '' },
    introduce: { type: String, default: '' },
    work_experience: { type: String, default: '' },
    mail_contact: { type: String, default: '' },
    revenue: { type:Number, default: 0 },
    create_course_status: { type: Number, default: 0 },
    star_rating: [{type:Number,default:''}],
    checknullimage:{type:Number, default: 0}
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', User);
