var express = require('express')
const router = express.Router();
const usermanagement = require('../app/controllers/usermanagementcontroler')

router.post('/updatecreatecoursestatus' ,usermanagement.updatestatus )

router.get('/:id' , usermanagement.showdetail)

router.get('/', usermanagement.index)

module.exports = router;