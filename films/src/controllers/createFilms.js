const Films = require('../data');
const { response } = require('../utils')

module.exports = async (req,res)=>{
    // res.status(200).send('creando films')
    const film = await Films.create() 
    // throw Error('hubo un error')
    response(res,201,film)
}