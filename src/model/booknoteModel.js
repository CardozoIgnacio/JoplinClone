const{DataTypes,Model, Sequelize}= require('sequelize')
const db = require('../db/dbConector');

const Usuario = require('./userModel');
const Note = require('./noteModel');


class BookNote extends Model{}

//const BookNote=db.define('booknotes',{
BookNote.init({  
    id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    /*
    usuario_id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        references:{
            model:Usuario,
            key:"id"
        },
    }
         */

},{
    sequelize:db,
    timestamps: false,
    underscored:true,
    modelName:'booknotes'
})

/*
BookNote.associations= model=>{
    BookNote.hasMany(model.Note,{foreignKey:{allowNull:false},onDelete:'CASCADE',hooks:true}),
    BookNote.belongsTo(Usuario,{as:'Usuario',foreignKey:{allowNull:false},onDelete:'CASCADE',hooks:true})
}

BookNote.hasMany(Note,{as:'booknote_id',onDelete:'CASCADE',onUpdate:"SET NULL",foreignKey:'booknote_id'});
*/
//BookNote.belongsTo(Usuario,{as:'usuarios',foreignKey:'id'})

module.exports = BookNote