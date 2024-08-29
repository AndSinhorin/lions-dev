let residencias = require('./residencias')

function listarResidencias(){
    console.log('Lista de residências: ')
    residencias.forEach((residencia, index) => {
        console.log(`${index+1}. Nome do proprietário: ${residencia.nomeProprietario}, Bairro: ${residencia.bairro}, Rua: ${residencia.rua}, Número: ${residencia.numero}`)
    })
}
module.exports = listarResidencias