const prompt = require('prompt-sync')()
const atualizarBaralho = require('./baralho/atualizarBaralho')
const deletarBaralho = require('./baralho/deletarBaralho')
const criarBaralho = require('./baralho/criarBaralho')
const listarBaralho = require('./baralho/listarBaralho')
const atualizarFlashcard = require('./flashcard/atualizarFlashcard')
const buscarFlashcardsPorBaralho = require('./flashcard/buscarFlashcardsPorBaralho')
const buscarFlashcardsPorPergunta = require('./flashcard/buscarFlashcardsPorPergunta')
const criarFlashcard = require('./flashcard/criarFlashcard')
const deletarFlashcard = require('./flashcard/deletarFlashcard')
const findFlashcardIndexById = require('./flashcard/findFlashcardIndexById')
const listarFlashcards = require('./flashcard/listarFlashcards')
const listarFlashcardsPorBaralhoId = require('./flashcard/listarFlashcardsPorBaralhoId .js')

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
        let titulo = prompt('Qual o novo título?: ')
        criarBaralho({ titulo })
        console.log('Baralho adicionado com sucesso! ')
        exibirMenu()
        break
    case '2':
        let pergunta = prompt('Qual a pergunta? ')
        let resposta = prompt('Qula a resposta da pergunta? ')
        let idBaralho = prompt('Qul o id do baralho que será adicionado o flashcard? ')
        criarFlashcard({pergunta, resposta, idBaralho})
        exibirMenu()
        break
    case '3':
        listarBaralho()
        exibirMenu()
        break
    case '4':
        listarFlashcards()
        exibirMenu()
        break
    case '5':
        let id = parseInt(prompt('Qual o id do baralho para mostrar seus flashcards? '))
        listarFlashcardsPorBaralhoId(id)
        exibirMenu()
        break
    case '6':
        let idAtualizar = parseInt(prompt('Qula o id do baralho que deseja atualizar: '))
        let novoTitulo = prompt('Qual o novo título? ')
        atualizarBaralho(idAtualizar, {titulo: novoTitulo})
        console.log('Atualizado com sucesso! ')
        exibirMenu()
        break
    case '7':
        listarFlashcards()
        let idAtualizar2 = parseInt(prompt('Qual o id do flashcard que deseja atulaizar? '))
        let novaPegunta = prompt('Qual a nova pergunta?: ')
        let novaResposta = prompt('Qual a nova resposta?: ')
        let novoBaralho = parseInt(prompt('Qual onovo baralho: '))
        atualizarFlashcard(idAtualizar2, {pergunta: novaPegunta, resposta: novaResposta, idBaralho: novoBaralho})
        console.log('Atualizado com sucesso! ')
        exibirMenu()
        break
    case '8':
        listarBaralho()
        let idRemover = parseInt(prompt('Qual baralho deseja deletar?: '))
        deletarBaralho(idRemover)
        console.log('Removido com sucesso! ')
        exibirMenu()
        break
    case '9':
        listarFlashcards()
        let idRemover2 = parseInt(prompt('Qual flashcard deseja deletar?: '))
        deletarFlashcard(idRemover2)
        console.log('Removido!!')
        exibirMenu()
        break
    case '10':
        let buscar = parseInt(prompt('Qual o baralho que tem os flashcards que você quer?: '))
        buscarFlashcardsPorBaralho(buscar)
        exibirMenu()
        break
    case '11':
        let buscar2 = prompt('Qual pergunta que você quer achar?: ')
        buscarFlashcardsPorPergunta(buscar2)
        exibirMenu()
        break
    case '0':
        process.exit()
    default:
        console.log('Número invalido! ')
        exibirMenu()
    }
}
