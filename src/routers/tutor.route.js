var express = require('express')
const router = express.Router();
const tutorcontroler = require('../app/controllers/tutorcontroler')

router.get('/:id', tutorcontroler.detail)

router.get('/', tutorcontroler.index)

module.exports = router;