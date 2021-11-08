var express = require('express')
const router = express.Router();
var multer = require('multer')
var path = require('path')
var fs = require('fs')
const upload = multer({ dest: 'uploads/' })
const createcourse = require('../app/controllers/createcoursecontroler')

router.post('/:id/addvideo' , createcourse.addvideo)

router.post('/:id/updatelesson' , createcourse.updatelesson)

router.post('/', upload.single('coursebackground'), createcourse.createcourse)

router.get('/:id', createcourse.getcoursedetail)

router.get('/', createcourse.index)

module.exports = router;