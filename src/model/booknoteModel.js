const{DataTypes,Model}= require('sequelize')
const db = require('../db/dbConector');
const Usuario = require('./userModel');
const Note = require('./noteModel');

class BookNote extends Model{}

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
    iduser:{
        type:DataTypes.BIGINT,
        allowNull:false,
        references:{
            model:Usuario,
            key:"id"
        }
    }
},{
    sequelize:db,
     modelName: 'booknote',
    timestamps: false,
})

BookNote.associations= model=>{
    BookNote.hasMany(Note,{foreignKey:'idbook'}),
    BookNote.belongsTo(Usuario,{as:'Usuario',foreignKey:"id"})
}

module.exports = BookNote