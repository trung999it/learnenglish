var express = require('express')
const router = express.Router();
const createAccountController = require('../app/controllers/createaccountcontroller')


router.post('/', createAccountController.create);

router.get('/', createAccountController.index)

module.exports = router;