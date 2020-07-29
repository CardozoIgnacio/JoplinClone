const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../db/dbConector')
const BookNote =require('./booknoteModel');

class Usuario extends Model {}

//const Usuario= db.define('usuarios',{
Usuario.init({
  // attributes
  id: {
    type: DataTypes.BIGINT,
    autoIncrement:true,
    allowNull: false,
    primaryKey:true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull:false

  },
  email:{
    type : DataTypes.STRING,
    allowNull:false
  },
  password:{
      type:DataTypes.STRING,
      allowNull:false
  }
},{
  sequelize:db,
  timestamps: false,
  underscored:true,
  modelName:'usuarios'

 // underscored: true
} );
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
module.exports= Usuario
