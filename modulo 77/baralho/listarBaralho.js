let { baralhos } = require('../data')

function listarBaralho(){
    baralhos.forEach(baralho => {

        console.log(`
        ID: ${baralho.id},
        Título: ${baralho.titulo}
        `)
    }
)}

module.exports = listarBaralho