const planets = require('./planets.json');
const axios = require('axios');


const url = 'http://database:8004/Planet';

module.exports = {
    list: async ()=>{
        // return planets
        const { data } = await axios.get(url) 
        return data
    },
    create: async (planet)=>{
        const {data} = await axios.post(url, planet);
        return data
    }
}