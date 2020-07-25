const controllerIndex = {}

function indexRender(req,res){
    res.render('index',{title:"Getor de noticias"})
}

controllerIndex.indexRender= indexRender
module.exports= controllerIndex