var express = require('express')
const router = express.Router();
const coursecontroler = require('../app/controllers/showlistcoursecontroler')

router.put('/:id', coursecontroler.addmember)

router.get('/:id', coursecontroler.showcoursedetail)

router.get('/', coursecontroler.index)

module.exports = router;