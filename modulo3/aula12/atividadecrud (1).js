const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let funcionarios = []
let maiorSalario = 0

 function exibirMenu() {
    console.log(`
    Menu:
    1. Cadastrar funcionário
    2. Listar todos os funcionários
    3. Exibir funcionários com maior salário
    4. Remover funcionário
    5. Editar
    6. Sair
    `)
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                cadastrarFuncionario()
                break
            case '2':
                listarFuncionarios()
                break
            case '3':
                exibirMaiorSalario()
                break
            case '4':
                remover()
                break
            case '5':
                editar()
                break
            case '6':
                rl.close()
                break
            default:
                console.log('Opeção inválida, tente novamente.')
                exibirMenu()
                break
        }
    })
 }
 function cadastrarFuncionario(){
    rl.question('Digite o nome do funcionário: ', (nome) => {
        rl.question('Digite o cargo do funcionário: ', (cargo) =>{
          rl.question('Digite o salário do funcionário: ', (salario) => {
                funcionarios.push({nome: nome, cargo: cargo, salario: parseFloat(salario)})
                console.log('Funcionário cadastrado com sucesso!')
                exibirMenu()
            })  
        })
    })
 }
 function listarFuncionarios(){
    if (funcionarios.length === 0) {
        console.log('Nenhum funcionário cadastrado.')
    } else {
        console.log('A lista de funcionários:')
        for (let i = 0; i < funcionarios.length; i++) {
            console.log(`${i + 1}. Nome: ${funcionarios[i].nome}, Cargo: ${funcionarios[i].cargo}, Salário: R$ ${funcionarios[i].salario}`)
        }
    }
    exibirMenu()
 }

 function exibirMaiorSalario(){
    let funcionario
    for (let i = 0; i < funcionarios.length; i++){
        if (funcionarios[i].salario > maiorSalario){
            maiorSalario = funcionarios[i].salario
            funcionario = funcionarios[i]
        }
    }
    console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$ ${funcionario.salario}`)
    exibirMenu()
 }

exibirMenu()
function remover(){
    if (funcionarios.length == 0) {
        console.log('Nenhum funcionário cadastrado.')
        exibirMenu()
    } else {
        console.log('Lista de funcionários:')
        funcionarios.forEach((elemento, index) => {
            console.log(`${index + 1}. ${elemento.nome}`)
        })
        rl.question('Digite o número do elemento que deseja remover: ', (numero) => {
            if (numero > 0 && numero <= funcionarios.length) {
                funcionarios.splice(numero - 1, 1)
                console.log('Elemento removido com sucesso!')
                exibirMenu()
            } else {
                console.log('Número inválido, tente novamente.')
                exibirMenu()
            }   
        })
    }
}
function editar() {
    if (funcionarios.length == 0) {
        console.log('Nada cadastrado.')
        exibirMenu()
    } else {
        console.log('lista de funcionários')
        funcionarios.forEach((elemento, index) => {
            console.log(`${index + 1}. nome: ${elemento.nome} cargo: ${elemento.cargo} salário: ${elemento.salario}`)
        })
    rl.question('Digite o número do elemento que deseja editar: ', (numero) => {
        if (numero > 0 && numero <= funcionarios.length) {
            rl.question('Digite o novo nome: ', (nome) => {
                rl.question('Digite o novo cargo: ', (cargo) => {
                    rl.question('Digite o novo salário: ', (salario) => {
                        funcionarios[numero - 1] = {
                            nome,
                            cargo,
                            salario
                        }
                        console.log('editado com sucesso!')
                        exibirMenu()
                    })
                })
            })
        } else {
            console.log('Número inválido, tente novamente.')
            exibirMenu()
        }
    })
    
}
}