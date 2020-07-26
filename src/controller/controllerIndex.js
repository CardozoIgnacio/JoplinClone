const controllerIndex = {}

function indexRender(req,res){
    res.render('index',{title:"Box Note",version:"1.0",err:false})
    
}

controllerIndex.indexRender= indexRender
module.exports= controllerIndex