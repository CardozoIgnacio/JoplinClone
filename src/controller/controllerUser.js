const controllerUser = {};
const usermodel = require("../model/userModel");
const Usuario = require("../model/userModel");

function getUsers(req, res) {
	usermodel
		.findAll()
		.then((respuesta) => {
			// console.log(respuesta);
			res.render("listarUsers.ejs", { usuarios: respuesta });
		})
		.catch((err) => console.log("Fallamos con total exito", err));
}
//const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
function createUser(req, res) {
	/*  
    console.log(data)
    */
	const dataUser = req.body;
   
        
        Usuario.create({
            nombre: dataUser.name,
            email: dataUser.email,
            password: dataUser.pass,
        })
		.then(x=>{
			//res.redirect("/")
			res.render("index",{title: "Signin usuario",msj:{exito:"Usuario registrado correctamente puede loguear"}})
        })
		.catch(err=>{
            res.render("userCreate", {
				title: "Signin usario",
				msj:{
					err: "Usuario no valido ingrese nuevamente"
				}
			})})
        
    }
   

function loginUser(req, res) {
	const loginCredentials = req.body;
	Usuario.findAll({
		where: {
			nombre: loginCredentials.user,
			password: loginCredentials.pass,
		},
	})
		.then((x) => {
			//console.log(x)
			//console.log(user)
			if (x.length === 0) {
				res.render("index", { title: "Box note",msj:{err:"Usuario o contraseña incorrectos"}});
			} else {
				res.render("index", { title: "Box note", msj:{} });
			}
		})
		.catch((err) => console.log("Fallamos con total exito", err));
}

function renderSignin(req, res) {
	res.render("userCreate", { title: "SignIn usuario", msj:{}});
}
function renderListUsers(req, res) {
	Usuario.findAll({
		attributes: ["nombre", "email"],
	}).then((list) => {
		var arryUser = [];
		list.forEach((x) => arryUser.push(x.dataValues));
		// console.log(lista)
		res.render("listarUsers", { usuarios: arryUser });
	});
}

controllerUser.getUsers = getUsers;
controllerUser.createUser = createUser;
controllerUser.loginUser = loginUser;
controllerUser.renderSignin = renderSignin;
controllerUser.renderListUsers = renderListUsers;
module.exports = controllerUser;
