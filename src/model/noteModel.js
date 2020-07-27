const {DataTypes,Model}= require('sequelize')
const db = require('../db/dbConector')
const BookNote = require('./booknoteModel')

class Note extends Model {}

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
    idnote:{
        type:DataTypes.BIGINT,
        allowNull:false,
        references:{
            model:BookNote,
            key:"id"
        }
    }
},{
    sequelize:db,
     modelName: 'note',
    timestamps: false,
})
Note.associations = model=>{
    Note.belongsTo(BookNote,{as:'BookNote',foreignKey:"id"})
}

module.exports = Note