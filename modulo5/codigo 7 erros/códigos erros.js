const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tarefas = [
    { descricao: "Estudar JavaScript", concluida: false },
    { descricao: "Fazer compras", concluida: true }
];

function listarTarefas() {
    if (tarefas.lenght == 0) {
        //escrito errado length
        console.log("Nenhuma tarefa cadastrada.");
    } else {
        tarefas.forEach((tarefa, index) => {
            console.log(`${index}. ${tarefa.descricao} - ${tarefa.concluida ? "Concluída" : "Pendente"}`);
            //index deveria ser index + 1 
        });
    }
}

function adicionarTarefa() {
    rl.question("Digite a descrição da tarefa: ", (descricao) => {
        rl.question("A tarefa está concluída? (sim/não): ", (resposta) => {
            let concluida = resposta.toUpperCase() === "sim";
            tarefas.push({ descricao, concluida });
            console.log("Tarefa adicionada com sucesso!");
            executar();
        });
    });
}

function editarTarefa() {
    listarTarefas();
    rl.question("Digite o número da tarefa a editar: ", (numero) => {
        let index = parseInt(numero) - 1;
        if (index >= 0 && index <= tarefas.length) { //deveria ser só < ou >
            rl.question("Digite a nova descrição da tarefa: ", (descricao) => {
                rl.question("A tarefa está concluída? (sim/não): ", (resposta) => {
                    let concluida = resposta.toLowerCase() === "sim";
                    tarefas[index] = { descricao, concluida };
                    console.log("Tarefa editada com sucesso!");
                    executar();
                });
            });
        } else {
            console.log("Número inválido.");
            executar();
        }
    });
}

function removerTarefa() {
    listarTarefas();
    rl.question("Digite o número da tarefa a remover: ", (numero) => {
        let index = parseInt(numero) - 1;
        if (index >= 0 && index <= tarefas.length) {
            let tarefaRemovida = tarefas.splice(index, 2); //remove 2 objetos
            console.log(`Tarefa removida: ${tarefaRemovida.descricao}`);
        } else {
            console.log("Número inválido.");
            executar(); //faltou executar()
        }
    });
}

function executar() {
    console.log("\n1. Listar Tarefas\n2. Adicionar Tarefa\n3. Editar Tarefa\n4. Remover Tarefa\n5. Sair");
    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case '1':
                listarTarefas();
                executar();
                break;
            case '2':
                adicionarTarefa();
                break;
            case '3':
                editarTarefa();
                break;
            case '4':
                removerTarefa();
                break;
            case '5':
                rl.close(); 
                break;
            default:
                console.log("Opção inválida");
                executar();
                break;
        }
    });
}

executar();