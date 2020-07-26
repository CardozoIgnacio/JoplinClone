var express = require('express');
var router = express.Router();
const controllerUser = require('../controller/controllerUser')

/* GET users listing. */
router.get('/',controllerUser.getUsers ) 
router.get('/signin',controllerUser.renderSignin)
router.get('/list',controllerUser.renderListUsers)
/* Post users*/
router.post('/login',controllerUser.loginUser)
router.post('/',controllerUser.createUser )
module.exports = router;


