var express = require('express')
const router = express.Router();
const coursemanagement = require('../app/controllers/coursemanagememtcontroler')

router.post('/:id', coursemanagement.chanestatus)

router.get('/:id', coursemanagement.detail)

router.get('/', coursemanagement.index)

module.exports = router;