var express = require('express')
const router = express.Router();
var multer = require('multer')
var path = require('path')
var fs = require('fs')
const upload = multer({ dest: 'uploads/' })
const blog = require('../app/controllers/blogcontroler')

router.post('/:id/report', blog.report)

router.post('/:id', blog.addcomment)

router.get('/:id', blog.blogdetail )

router.get('/', blog.index)

module.exports = router;