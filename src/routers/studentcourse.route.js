var express = require('express')
const router = express.Router();
const studentcourse = require('../app/controllers/studentscoursecontroler')

router.get('/certification/:id' , studentcourse.getcertification)

router.get('/:id', studentcourse.classroom)

router.get('/', studentcourse.index)

module.exports = router;