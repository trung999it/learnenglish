var express = require('express')
const router = express.Router();
const coursemanagement = require('../app/controllers/coursemanagememtcontroler')

router.get('/', coursemanagement.index)

module.exports = router;