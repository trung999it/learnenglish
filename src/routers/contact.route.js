var express = require('express')
const router = express.Router();
const contactcontroler = require('../app/controllers/contactcontroler')

router.post('/', contactcontroler.sendmail)

router.get('/', contactcontroler.index)

module.exports = router;