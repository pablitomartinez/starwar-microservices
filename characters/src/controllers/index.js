//indice de todos los controllers de esta carpeta
const { catchedAsync } = require('../utils')

module.exports = {
    getCharacters: catchedAsync(require('./getCharacters')),
    createCharacters: catchedAsync(require('./createCharacters'))
}