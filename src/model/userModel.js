const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../db/dbConector')

class Usuario extends Model {}
Usuario.init({
  // attributes
  id: {
    type: DataTypes.BIGINT,
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


  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true,
  // options
});

module.exports= Usuario