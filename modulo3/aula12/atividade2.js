const { ADDRGETNETWORKPARAMS } = require('dns')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let artePintura = []

function exibirMenu() {
    console.log(`
    Menu:
    1. Cadastrar arte modelo
    2. Listar artes 
    3. Editar
    4. Remover
    5. Sair
    `)
    rl.question('Ecolha uma opcao: ', (opcao) => {
        switch (opcao) {
            case '1':
                cadastrarArte()
                break
            case '2':
                listarArte()
                break
            case '3':
                editar()
                break
            case '4':
                remover()
            case '5':
                rl.close()
                break
            default:
                console.log('Opeção inválida, tente novamente.')
                exibirMenu()
                break

        }
    })
}
function cadastrarArte(){
    rl.question('Cadastrar arte: ', (nome) => {
        rl.question('Cores usadas na flor: ', (cores1) =>{
            rl.question('Cores usadas nas folhas: ', (cores2) => {
                rl.question('A marca da tinta utilizada?', (marca) => {
                    artePintura.push({nome: nome, core1: cores1, cores2: cores2, marca: marca})
                    console.log('Funcionário cadastrado com sucesso!')
                    exibirMenu()
                })
            
            })  
        })
    })
}
function listarArte(){
    if(artePintura.length === 0){
        console.log('Nenhuma arte cadastrada.')
    } else {
        console.log('Arte modelo cadastradas:')
        for(i = 0; i < artePintura.length; i++){
            console.log(`${i + 1}, No modelo ${nome} foi usado as seguinte cores para as flores: ${cores1} e para as folhas ${cores2} da ${marca}`)
        }
    }
    exibirMenu()
}
function editar(){
    if (arteModelo.length === 0){
        console.log('Nenhum modelo encontrado.')
    } else {
        console.log('Lista de arte modelo cadastrado:')
        arteModelo.forEach((elemento, index) => {
            console.log(`${index + 1}
            Modelo: ${nome} 
            Cores das flores: ${cores1} 
            Cores das folhas: ${cores2} 
            Marca ${marca}`)
        })
        rl.question('Digite o número do elemento que deseja edita: ', => (numero) {
            if (numero > 0 && <= arteModelo.length) {
                rl.question('Cadastrar arte: ', (nome) => {
                    rl.question('Cores usadas na flor: ', (cores1) =>{
                        rl.question('Cores usadas nas folhas: ', (cores2) => {
                            rl.question('A marca da tinta utilizada?', (marca) => {
                                arteModelo[numero - 1] = {
                                    nome,
                                    cores1,
                                    cores2,
                                    marca
                                }
                                console.log('Editado com sucesso!')
                                exibirMenu()
                            })
                        })
                    })
                })
            } else {
                console.log('Número invalido, tente novamente.')
                exibirMenu()
            }
        })
    }
}
