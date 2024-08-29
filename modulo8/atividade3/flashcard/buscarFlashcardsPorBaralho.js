let { flashcards } = require('../data')
const findFlashcardIndexById = require('./findFlashcardIndexById')

function buscarFlashcardsPorBaralho(idBaralho) {
    const flashByBaralhoId = flashcards.filter(flash => flash.idBaralho === idBaralho)

    flashByBaralhoId.forEach(flashcard => {
        const acharIdBaralho = findFlashcardIndexById(flashcard.idBaralho)
        
        console.log(`
        ID do flashcard. ${flashcard.id}
        Pergunta. ${flashcard.pergunta}
        Resposta. ${flashcard.resposta}
        ID do Baralho. ${flashcard.idBaralho}`)
    })
}

module.exports = buscarFlashcardsPorBaralho