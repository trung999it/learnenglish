var express = require('express')
const router = express.Router();
const chanepasswordcontronler = require('../app/controllers/changepasswordcontroler')

router.post('/', chanepasswordcontronler.chanepassword)

router.get('/', chanepasswordcontronler.index)

module.exports = router;