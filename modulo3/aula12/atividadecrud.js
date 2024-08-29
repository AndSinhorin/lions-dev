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
    4. Sair
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