const controllerUser = {}
const db = require('../db/dbConector');
const usermodel=require('../model/userModel')
function getusers(req,res){
    usermodel.findAll()
        .then(respuesta=>{
       // console.log(respuesta);
        res.render('listarUsers.ejs',{usuarios:respuesta})})
        .catch(err=>console.log("Fallamos con total exito",err))
}

controllerUser.getusers=getusers
module.exports = controllerUser