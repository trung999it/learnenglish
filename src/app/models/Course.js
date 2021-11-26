const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    coursename: { type: String, default: '' },
    courseimage: { data: Buffer, contentType: String, default:''},
    idvideointro: { type: String, default: '' },
    price: { type: Number, default: 0 },
    description: { type: String, default: '' },
    author:{ type: String, default: '' },
    required: { type: String, default: '' },
    gained: { type: String, default: '' },
    openday: { type: Date, default: '' },
    endday: { type: Date, default: '' },
    timetable: { type: String, default: '' },
    active_status:{type: String, default: 'prepare'},
    course_status: { type: Number, default: 0 },
    member: [{student: String, complete: Number}],
    notification: { type: String, default: '' },
    exercise: { type: String, default: '' },
    listvideo: [{title: String , idvideo: String , comment: [{user:String , com: String}]}],
    star_rating: [{type:Number,default:''}],
    checknullimage:{type:Number, default: 0}
}, {
  timestamps: true,
});

module.exports = mongoose.model('Course', Course);
