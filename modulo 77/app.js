const prompt = require('prompt-sync')()
//const atualizarBaralho = require('./baralho/atualizarBaralho')
//const deletarBaralho = require('./baralho/deletarBaralho')
const criarBaralho = require('./baralho/criarBaralho')
const listarBaralho = require('./baralho/listarBaralho')

exibirMenu()
function exibirMenu(){
    console.log(`
--------------Menu----------------
1. Criar Baralho
2. Criar Flashcard
3. Listar Baralhos
4. Listar Flashcards
5. Listar Flashcards por Baralho
6. Atualizar Baralho
7. Atualizar Flashcard
8. Deletar Baralho
9. Deletar Flashcard
10. Buscar Flashcards por Pergunta
11. Buscar Flashcards por Baralho
0. Sair
----------------------------------
`)

let opcao = prompt('Escolha uma opção: ')
switch(opcao){
    case '1':
        let 
        criarBaralho()
        exibirMenu()
        break
    case '2':
        criarFlashcard()
        break
    case '3':
        listarBaralho()
        break
    case '4':
        listarFlashcards()
    case '5':
        listarFlashcardsPorBaralho()
    case '6':
        atualizarBaralho()
    case '7':
        atualizarFlashcard()
    case '8':
        deletarBaralho()
    case '9':
        deletarFlashcard()
    case '10':
        buscarFlashcardsPorPergunta()
    case '11':
        buscarFlashcardsPorBaralho
    case '0':
        process.exit()
    default:
        console.log('Número invalido! ')
        
    }
}
