const Planets = require('../data');
const { response } = require('../utils');

module.exports = async (req,res)=>{
    const planets = await Planets.list()
    // res.status(200).json(planets)
    response(res, 200, planets)
};