const readline = require('readline')
const {adicionarSerie} = require('./adicionar')
const {editarSeries} = require('./editar')
const {listarSeries} = require('./listar')
const {removerSeries} = require('./remover')

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

let series = []

exibirMenu()
function exibirMenu() {
    console.log(`
    Menu:
    1. Adicionar Série
    2. Editar Serie
    3. Listar Séries
    4. Remover Série
    5. Marcar como Concluido
    6. Sair
    `)

rl.question('Escolha uma opção: ', (opcao) => {
    switch(opcao) {
        case '1':
            adicionarSerie(rl, series, exibirMenu)
            break
        case '2':
            editarSeries(rl, series, exibirMenu)
            break
        case '3':
            listarSeries(series, exibirMenu)
            exibirMenu()
            break
        case '4':
            removerSeries(rl, series, exibirMenu)
            break
        case '5':
            concluido()
            break
        case '6':
            rl.close()
            break
        default:
            console.log('Numero invalido, tente denovo!')
            exibirMenu()
            break
        }
    })
}
