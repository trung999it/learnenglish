var express = require('express')
const router = express.Router();
var multer = require('multer')
var path = require('path')
var fs = require('fs')
const upload = multer({ dest: 'uploads/' })
const updateavatarcontroler = require('../app/controllers/updateavatarcontroler')

router.post('/',upload.single('avatar'), updateavatarcontroler.updateavatar)

router.get('/', updateavatarcontroler.index)

module.exports = router;