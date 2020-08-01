const controllerBooknote = {};
const noteModel = require("../model/noteModel");
const noteBookModel = require("../model/booknoteModel");
const db= require('../db/dbAssociations')

function renderBooknote(req, res) {
	//noteBookModel
	//db.models.booknotes
	db.booknote
		.findAll()
		.then((resp) => {
			//console.log("La respuesta a la consulta es: ",resp)
			res.render("booknoteCreate", { title: "Creacion de noteBook" });
		})
		.catch((err) => {
			console.log("RenderBookNote --Error", err);
		});
}

function createBooknote(req, res) {
	const dataNoteBook = req.body;
	//console.log(dataNoteBook);
	noteBookModel
		.create({
			usuario_id: dataNoteBook.user,
			name: dataNoteBook.name,
		})
		.then((x) => {
			console.log("Usuarios creado correctamente", x);
			res.sendStatus(200)
		})
		.catch((err) => {
			console.log("CreateBookNote --Error", err);
		});
}

function createNote(req, res) {
	const dataNote = req.body;
	//console.log(dataNote);
	noteModel
		.create({
			title: dataNote.title,
			body: dataNote.body,
			booknote_id: "2",
		})
		.then((x) => {
			console.log("Datos cargados con total Exito")
			res.sendStatus(200)})
		.catch((err) => console.log("Create note --Error", err));

}

function destroyNote(req, res) {
	const dataNote = req.body;
	const idNote = dataNote.idnote;
	noteModel
		.destroy({
			where: {
				id: idNote,
			},
			cascade: true,
		})
		.then((x) => {
			console.log("La nota fue destruida correctamente", x);
			res.sendStatus(200)
		})
		.catch((err) => {
			console.log("DestroyNote--Error", err);
		});
}

function destroyBookNote(req, res) {
	const dataBookNote = req.body;
	const idBookNote = dataBookNote.idnotebook;
	console.log("El id del booknote que se quiere eliminar es",idBookNote)
	//noteBookModel
	db.booknote
		.destroy({
			where: {
				id: idBookNote,
			},
		})
		.then((x) => {
			console.log("BookNote eliminado correctamente", x)
			res.sendStatus(200)
		})
		.catch((err)=>{console.log("DestoyBook--Error",err)})
		/*
		.catch((err) => {
			noteModel.findAll({ where: { booknote_id: idBookNote } }).then((notes) => {
				console.log("Las notas que entrego la consulta fueron", notes);
				var arryPromes = [];
				notes.forEach((note) => {
					let idnoteDestroy = note.dataValues.id;
					arryPromes.push(
						noteModel.destroy({
							where: { id: idnoteDestroy },
						})
						);
					});
					Promise.all(arryPromes).then((prom) =>
					console.log("Todos los datos fueron borrados")
					);
				});
			});
		*/
		}

controllerBooknote.destroyBookNote = destroyBookNote;
controllerBooknote.destroyNote = destroyNote;
controllerBooknote.createNote = createNote;
controllerBooknote.createBooknote = createBooknote;
controllerBooknote.renderBooknote = renderBooknote;
module.exports = controllerBooknote;
