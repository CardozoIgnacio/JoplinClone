const passport = require("passport")

const passaport = {}
function checkAutenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }else{
        res.redirect('/')
    }
}

function checkNotAutenticated(req,res,next){
    if(req.isAuthenticated()){
         res.redirect('/booknote')
    }else{
        return next()
    }
}
passport.checkAutenticated=checkAutenticated
passport.checkNotAutenticated=checkNotAutenticated
module.exports = passport