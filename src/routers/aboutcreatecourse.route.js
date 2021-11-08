var express = require('express')
const router = express.Router();
const aboutcreatecourse = require('../app/controllers/aboutcreatecoursecontroler')

router.get('/', aboutcreatecourse.index)

module.exports = router;