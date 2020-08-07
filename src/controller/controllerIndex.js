const controllerIndex = {};

function indexRender(req, res) {
	res.render("index", {
		title: `Box Note`,
		version: "2.0",
		msj: { err: false },
	});
}

controllerIndex.indexRender = indexRender;
module.exports = controllerIndex;
