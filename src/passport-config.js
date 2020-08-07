const localStrategy = require("passport-local").Strategy;
const Usuario= require('./model/userModel')
const bcrypt =require('bcrypt')

function initalize(passport) {
	const autenticateUser = (user,pass,done) => {
	
		Usuario.validUser(user,pass).then().catch()
	done(null,false,{message:"No existe un usuario con ese nombre"})
	passport.use(
		new localStrategy(
			{ usernameField: "user", passwordField: "pass" },
			autenticateUser
		)
    );

    passport.serializeUser((user,done)=>{})
    passport.deserailizaUser((id,done)=>{})
}

module.exports= initalize
