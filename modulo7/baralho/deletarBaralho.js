let { baralhos } = require('../data')

function deletarBaralho(id) {
    let index = baralhos.findIndex(bara => bara.id === id);

    if(index !== -1) {    
    baralhos.splice(index, 1)      
    }
}

module.exports = deletarBaralho