var express = require('express')
const router = express.Router();
var multer = require('multer')
var path = require('path')
var fs = require('fs')
const upload = multer({ dest: 'uploads/' })
const createblog = require('../app/controllers/createblogcontroler')

router.get('/:id', createblog.blogdetail )

router.post('/deleteblog', createblog.deleteblog)

router.post('/',upload.single('blogbackground') ,createblog.createblog)

router.get('/', createblog.index)

module.exports = router;