module.exports = (fn)=>{
    return function(req, res, next){
        //para agarrar el manejador de errores de express
        fn(req, res).catch(err => {
            next(err)
        })
    }
}