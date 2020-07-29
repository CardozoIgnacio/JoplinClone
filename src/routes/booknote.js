var express = require('express')
var router = express.Router();
var controllerNoteBook=require('../controller/controllerBooknote')

router.get('/',controllerNoteBook.renderBooknote)
router.post('/createbooknote',controllerNoteBook.createBooknote)
router.post('/createnote',controllerNoteBook.createNote)
router.post('/destroynote',controllerNoteBook.destroyNote)
router.post('/destroybooknote',controllerNoteBook.destroyBookNote)
module.exports= router;