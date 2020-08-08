var express = require("express");
var router = express.Router();
const controllerUser = require("../controller/controllerUser");
const passport = require("passport");
const controllPass= require('../controller/controllerPassport')
/* GET users listing. */
router.get("/", controllerUser.getUsers);
router.get("/signin", controllerUser.renderSignin);
router.get("/list", controllerUser.renderListUsers);
/* Post users*/
//router.post('/login',controllerUser.loginUser)
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/booknote",
    failureRedirect: "/error",
    failureFlash:false,
    passReqToCallback:true
  })
);
router.post("/", controllerUser.createUser);
module.exports = router;
