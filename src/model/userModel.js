const { Sequelize, Model, DataTypes, where } = require("sequelize");
const db = require("../db/dbConector");
const BookNote = require("./booknoteModel");
const bcrypt = require("bcrypt");

class Usuario extends Model {}

//const Usuario= db.define('usuarios',{
Usuario.init(
	{
		// attributes
		id: {
			type: DataTypes.BIGINT,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize: db,
		timestamps: false,
		underscored: true,
		modelName: "usuarios",
		hooks: {
			beforeValidate: async function (usuario) {
				try {
					usuario.password = await bcrypt.hash(
						usuario.password,
						bcrypt.genSaltSync(8)
					);
				} catch (err) {
					throw "Fallo al intentar encriptar la contaseña";
				}

				// console.log(bcrypt.hash(usuario.password,bcrypt.genSaltSync(8)))
			},
		},

		// underscored: true
	}
);
/*
Usuario.associations= model=>{
  
  Usuario.hasMany(model.BookNote,{
    foreignKey:'userid',
    onDelete:'CASCADE',
    hooks:true
  })
}
Usuario.hasMany(BookNote,{as:"usuario_id",onDelete:'CASCADE',foreignKey:'usuario_id'});
*/

//Usuario.hasMany(BookNote,{as:'booknote',onDelete:'CASCADE',foreignKey:'usuario_id'})
//Usuario.hashPassword=async function (password){return bcrypt.hash(password,bcrypt.genSaltSync(8))}
Usuario.validUser = async function (usr, password) {
	try {
		
		const usuario = await this.findOne({
			where: {
				nombre: usr,
			},
		});
		if (usuario) {
			let { dataValues } = usuario;
			const isValid =await bcrypt.compare(password, dataValues.password)
			return isValid
			
		}else{
			return false
		}
		//  return  bcrypt.compare(password,dataValues.password)
	} catch (error) 
		{
			throw  "UserModelValidationUserPassword " + error
		}
	};
	module.exports = Usuario;
	