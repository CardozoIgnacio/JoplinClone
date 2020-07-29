const {DataTypes,Model}= require('sequelize')
const db = require('../db/dbConector')
const BookNote = require('./booknoteModel')
const Usuario = require('./userModel')

class Note extends Model{}
//const Note= db.define('notes',{
Note.init({
    id:{
        type:DataTypes.BIGINT,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    title:{
       type:DataTypes.STRING,
       allowNull:false 
    },
    body:{
        type:DataTypes.STRING,
        allowNull:false
    },
 /*
 booknote_id:{
     type:DataTypes.BIGINT,
     allowNull:false,
     references:{
         model:BookNote,
         key:"id"
        },
        
    }
       */   
},{
    sequelize:db,
    timestamps: false,
    underscored:true,
    modelName:'notes',

})
/*
Note.associations = model=>{
    Note.belongsTo(model.BookNote,{as:'BookNote',foreignKey:"id",onDelete:'CASCADE',hooks:true})
}
*/

//Note.belongsTo(BookNote,{as:'booknotes',foreignKey:'id'})



module.exports = Note