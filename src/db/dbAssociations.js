const booknote = require("../model/booknoteModel");
const note = require("../model/noteModel");
const user = require("../model/userModel");
const db = require("./dbConector");

function defineAssociations() {
	booknote.hasMany(note, {
		as: "notes",
		foreignKey: "booknote_id",
		onDelete: "CASCADE",
		hooks: true,
	});
	booknote.belongsTo(user,{
		onDelete: "CASCADE",
		hooks:true,
		foreignKey:"usuario_id"
	});
    note.belongsTo(booknote, 
        { onDelete: "CASCADE",
		 hooks: true ,
		foreignKey:"booknote_id"});
    user.hasMany(booknote, 
        { as: "booknoters"
		, foreignKey: "usuario_id"
	 });

		db.sync()
	return { booknote, note, user };
}

module.exports = defineAssociations();
