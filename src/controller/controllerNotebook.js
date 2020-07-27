const controllerNoteBook = {}
const db = require('../db/dbConector');
const noteBookModel = require('../model/booknoteModel');
const noteModel = require('../model/noteModel')

function renderNoteBook(req,res){
    noteBookModel.findAll().then(
        resp=>{
            //console.log("La respuesta a la consulta es: ",resp)
            res.render('booknoteCreate',{title : "Creacion de noteBook"})
        }
    ).catch(err=>{
        console.log("Fallamos con total exito",err)
    })
}

function createNotebook(req,res){
    const dataNoteBook =req.body;
    console.log(dataNoteBook)
    noteBookModel.create({
        name:dataNoteBook.name,
       iduser:dataNoteBook.user
    }).then(x=>{
        console.log('Usuarios creado correctamente',x)
    }).catch(err=>{
        console.log("Fallamos con total exito",err)
    })
}

function createNote(req,res){
    const dataNote = req.body;
    console.log(dataNote);
    noteModel.create({
        title:dataNote.title,
        body:dataNote.body,
        idnote:1
    }).then(x=>
        console.log("Datos cargados con total Exito") )
      .catch(err=> console.log("Fallamos con total exito",err)) 

    res.sendStatus(200)
}

controllerNoteBook.createNote=createNote
controllerNoteBook.createNoteBook=createNotebook
controllerNoteBook.renderNoteBook=renderNoteBook
module.exports=controllerNoteBook