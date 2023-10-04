const characters = require('./characters.json');
const axios = require('axios');

const url = 'http://database:8004/Character'


module.exports = {
    list: async ()=>{
        // return characters
        const { data } = await axios.get(url) 
        return data
    },
    create: async ()=>{
        const {data} = await axios.post(url, character);
        return data
    }
};