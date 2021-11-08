var express = require('express')
const router = express.Router();
const accountcontronler = require('../app/controllers/accountcontroler')


router.post('/updateinfo', accountcontronler.updateinfo)

router.get('/', accountcontronler.index)

module.exports = router;