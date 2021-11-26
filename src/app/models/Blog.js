const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = new Schema({
    blogtittle: { type: String, default: '' },
    author:{type: String, default: ''},
    image: { data: Buffer, contentType: String, default:''},
    blogheader: { type: String, default: '' },
    blogcontain: { type: String, default: '' },
    blogfooter: { type: String, default: '' },
    command:[{username: String, com: String}],
    blogstatus:{type:String,  default: 'working'}
}, {
  timestamps: true,
});

module.exports = mongoose.model('Blog', Blog);
