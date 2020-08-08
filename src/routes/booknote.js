var express = require('express')
var router = express.Router();
var controllerNoteBook=require('../controller/controllerBooknote')

const controllPass =require('../controller/controllerPassport')
router.get('/',controllPass.checkAutenticated,controllerNoteBook.renderBooknote)
router.post('/createbooknote',controllerNoteBook.createBooknote)
router.post('/createnote',controllerNoteBook.createNote)
router.post('/destroynote',controllerNoteBook.destroyNote)
router.post('/destroybooknote',controllerNoteBook.destroyBookNote)
module.exports= router;