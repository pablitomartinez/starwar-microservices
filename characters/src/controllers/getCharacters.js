const Characters = require('../data');
const { response } = require('../utils');

module.exports = async (req,res)=>{
    const characters = await Characters.list()
    // res.status(200).json(characters)
    response(res, 200, characters);
}