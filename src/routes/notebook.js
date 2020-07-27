var express = require('express')
var router = express.Router();
var controllerNoteBook=require('../controller/controllerNotebook')

router.get('/',controllerNoteBook.renderNoteBook)
router.post('/',controllerNoteBook.createNoteBook)
router.post('/createnote',controllerNoteBook.createNote)
module.exports= router;