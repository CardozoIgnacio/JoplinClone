const booknote = require("../model/booknoteModel");
const note = require("../model/noteModel");
const user = require("../model/userModel");

function defineAssociations() {
	booknote.hasMany(note, {
		as: "notes",
		foreignKey: "booknote_id",
		onDelete: "CASCADE",
		hooks: true,
	});
	booknote.belongsTo(user);
    note.belongsTo(booknote, 
        { onDelete: "CASCADE",
         hooks: true });
    user.hasMany(booknote, 
        { as: "booknoters"
        , foreignKey: "usuario_id" });

	return { booknote, note, user };
}

module.exports = defineAssociations();
