var express = require('express')
const router = express.Router();
const loginControler = require('../app/controllers/logincontroler');


router.post('/', loginControler.login);

router.get('/', loginControler.index)

module.exports = router;
