const localStrategy = require("passport-local").Strategy;
const Usuario = require("./model/userModel");
const { validUser } = require("./model/userModel");

function initalize(passport) {
  const autenticateUser = (user, pass, done) => {
    Usuario.validUser(user, pass)
      .then((isValid) => {
        if (isValid) {
          done(null, user);
        } else {
          done(null, false, { message: "Usuario o contraseña no validos" });
        }
      })
      .catch((err) => console.log("Error de autenticacion", err)); // TODO: Renderizar pagina de error
    //done(null, false, { message: "No existe un usuario con ese nombre" });
  };

  passport.use(
    new localStrategy(
      { usernameField: "user", passwordField: "pass" },
      autenticateUser
    )
  );

  passport.serializeUser(async(user, done) => {
    try {
      const {dataValues}= await Usuario.findOne({where:{nombre:user}})
      console.log(dataValues.id)
      done(null,dataValues.id);
    } catch (error) {
      console.log("el error sale x aca",error)  
    }
  });
  passport.deserializeUser((id, done) => {
    return done(null, Usuario.findByPk(id));
  });
}

module.exports = initalize;
