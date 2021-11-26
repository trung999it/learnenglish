var express = require('express')
const router = express.Router();
var multer = require('multer')
var path = require('path')
var fs = require('fs')
const upload = multer({ dest: 'uploads/' })
const blogmanagement = require('../app/controllers/blogmanagementcontroler')

router.post('/changestatus' , blogmanagement.chanestatus)

router.post('/', blogmanagement.deleteblog)

router.get('/', blogmanagement.index)

module.exports = router;