let {flashcards} = require('../data')
const findFlashcardIndexById = require('./findFlashcardIndexById')

function buscarFlashcardsPorPergunta(pergunta, acharPergunta) {
    const flashByPergunta = flashcards.filter(flash => flash.pergunta === pergunta)

    flashByPergunta.forEach(flashcard => {
        const acharPergunta = findFlashcardIndexById(flashcard.pergunta)
        
        console.log(`
        ID do flashcard. ${flashcard.id}
        Pergunta. ${flashcard.pergunta}
        Resposta. ${flashcard.resposta}
        ID do Baralho. ${flashcard.idBaralho}`)
    })
}

module.exports = buscarFlashcardsPorPergunta