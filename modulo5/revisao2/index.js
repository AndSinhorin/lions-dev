const prompt = require('prompt-sync')();
const adicionarResidencia = require('./adicionar.js')
const listarResidencias = require('./listar.js')
const editarResidencias = require('./editar.js')
const removerResidencia = require('./remover.js')
let residencias = require('./residencias.js')

exibirMenu()
function exibirMenu(){
    console.log(`
    -----Menu-----
    1.Listar residência
    2.Adicionar residência
    3.Editar residência
    4.Remover
    5.Sair
    --------------
    `)
    let index
    let opcao = prompt('Escolha uma opção: ')

    switch (opcao) {
        case '1':
            listarResidencias()
            exibirMenu()
            break
        case '2':
            let nomeProprietario = prompt('Digite o nome do proprietário:')
            let bairro = prompt('Digite o nome do bairro: ')
            let rua = prompt('Qula o nome da rua: ')
            let numero = prompt('Digite o número da residência: ')
            residencias.push({nomeProprietario, bairro, rua, numero})
            exibirMenu()
            break
        case '3':
            listarResidencias()
            let novoNomeProprietario = prompt('Digite o nome:')
            let novoBairro = prompt('Digite o bairro: ')
            let novaRua = prompt('Nome da rua: ')
            let novoNumero = prompt('Numero da residência: ')
            editarResidencias(index, {nomeProprietario: novoNomeProprietario, bairro: novoBairro, rua: novaRua, numero: novoNumero})
            console.log('Editado com sucesso! ')
            exibirMenu()
            break
        case '4':
            prompt('Escolha qual deseja remover: ') - 1
            console.log('Residência removida com sucesso!')
            removerResidencia(index)
            exibirMenu()
        case '5':
            process.exit()
        default:
            console.log('Número invalido!')
    }
}
