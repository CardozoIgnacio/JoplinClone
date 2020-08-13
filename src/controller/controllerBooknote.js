const controllerBooknote = {};
const noteModel = require("../model/noteModel");
const noteBookModel = require("../model/booknoteModel");
const db = require("../db/dbAssociations");
const Note = require("../model/noteModel");
const BookNote = require("../model/booknoteModel");
const Usuario = require("../model/userModel");

function renderBooknote(req, res) {
	//noteBookModel
	//db.models.booknotes
	// console.log("EL id del usuario es",req.user)

	// db.booknote
	// 	.findAll({
	// 		where:{usuario_id : req.user}
	// 	})
	// 	.then((resp) => {
	// 		const respuesta = []
	// 		resp.forEach(elem=>{
	// 			let { dataValues }= elem
	// 			respuesta.push(dataValues)
	// 		})
	// 		console.log("La respuesta a la consulta es: ",respuesta)
	// 		res.render("booknoteCreate", { title: "Creacion de noteBook" });
	// 	})
	// 	.catch((err) => {
	// 		console.log("RenderBookNote --Error", err);
	// 	});

	// const respuesta = [];
	// Note.findAll().then((resp) => {
	// 	resp.forEach((elem) => {
	// 		let { dataValues } = elem;
	// 		respuesta.push(dataValues);
	// 	});
	// 	console.log(respuesta);
	// });

	// const respuesta = [];
	// Note.findAll({where:{booknote_id:1} ,include: [{ model: BookNote, required: true }] }).then(post=>console.log(post));

	BookNote.findAll({
		where: { usuario_id: 3 },
		include: { model: Note, required: true },
	})
		.then((x) => {
			let {dataValues} = x[0]
			let {notes}=dataValues
			console.log("La respuesta a la consulta es:", notes);

		})
		.catch((err) => console.error(err));

	// res.render("booknoteView", {
	// 	booknotes: [
	// 		{ id: "1", name: "BookNoteHugo1", usuario_id: "2" },
	// 		{ id: "2", name: "BookNoteHugo2", usuario_id: "2" },
	// 	],
	// 	notes: [
	// 		{
	// 			id: "1",
	// 			title: "Nota 1",
	// 			body: "Esta es la nota 1 del booknote 2",
	// 			booknote_id: "1",
	// 		},
	// 		{
	// 			id: "2",
	// 			title: "Nota 2",
	// 			body: "Esta es la nota 2 del booknote 2",
	// 			booknote_id: "2",
	// 		},
	// 		{
	// 			id: "3",
	// 			title: "Nota 3",
	// 			body: "Esta es la nota 3 del booknote 2",
	// 			booknote_id: "2",
	// 		},
	// 	],
	// });
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
			res.sendStatus(200);
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
			booknote_id: "3", //TODO: Seleccion correcta del libro al cual se desea agregar la nota
		})
		.then((x) => {
			console.log("Datos cargados con total Exito");
			res.sendStatus(200);
		})
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
			res.sendStatus(200);
		})
		.catch((err) => {
			console.log("DestroyNote--Error", err);
		});
}

function destroyBookNote(req, res) {
	const dataBookNote = req.body;
	const idBookNote = dataBookNote.idnotebook;
	console.log("El id del booknote que se quiere eliminar es", idBookNote);
	//noteBookModel
	db.booknote
		.destroy({
			where: {
				id: idBookNote,
			},
		})
		.then((x) => {
			console.log("BookNote eliminado correctamente", x);
			res.sendStatus(200);
		})
		.catch((err) => {
			console.log("DestoyBook--Error", err);
		});
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
