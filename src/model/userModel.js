const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../db/dbConector')
const BookNote =require('./booknoteModel');

class Usuario extends Model {}
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
}, {
  sequelize:db,
  modelName: 'usuario',
  timestamps: false,



});

Usuario.associations=model=>{
  Usuario.hasMany(BookNote,{
    foreignKey:'userid'
  })
}

module.exports= Usuario
