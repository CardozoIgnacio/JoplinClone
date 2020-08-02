const controllerIndex = {}

function indexRender(req,res){
   console.log(process.env.DATABASE_URL) 
    res.render('index',{title:"Box Note",version:"1.0",msj:{err:false}})
    
}

controllerIndex.indexRender= indexRender
module.exports= controllerIndex