var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('listarUsers',{usuarios :["Juani","Pedro","Gino"]})
});

module.exports = router;
