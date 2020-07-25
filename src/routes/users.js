var express = require('express');
var router = express.Router();
const controllerUser = require('../controller/controllerUser')

/* GET users listing. */
router.get('/',controllerUser.getusers ) 


module.exports = router;
