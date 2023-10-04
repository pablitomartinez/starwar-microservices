const films = require('./films.json');
const axios = require('axios');

const url = 'http://database:8004/Film'

module.exports = {
    list: async ()=>{
        const { data } = await axios.get(url) 
        // console.log(data);
        return data
    },
    create: async (film)=>{
        const {data} = await axios.post(url, film);
        return data
    }
};