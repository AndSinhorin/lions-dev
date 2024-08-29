let { baralhos } = require('../data')

function listarBaralho(){
    baralhos.forEach(baralho => {
        console.log(`
        ID: ${baralho.id}
        titulo: ${baralho.titulo}
        `)
    }
)}

module.exports = listarBaralho