let { baralhos } = require('../data');

function atualizarBaralho(id, novoTitulo) {
    let index = baralhos.findIndex(bara => bara.id === id);

    baralhos[index] = {id, ...novoTitulo}
}

module.exports = atualizarBaralho