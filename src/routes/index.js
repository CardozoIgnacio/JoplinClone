var express = require("express");
var router = express.Router();
const controllerIndex = require("../controller/controllerIndex");
const controllPass= require("../controller/controllerPassport")
/* GET home page. */
router.get(
  "/",
  controllPass.checkNotAutenticated,
  controllerIndex.indexRender
);

module.exports = router;
