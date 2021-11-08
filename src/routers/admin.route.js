var express = require('express')
const router = express.Router();
const admincontroler = require('../app/controllers/admincontroler')

router.get('/', admincontroler.index)

module.exports = router;