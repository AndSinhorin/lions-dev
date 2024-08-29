let { flashcards } = require('../data')

function listarFlashcards() {
    flashcards.forEach(flashcard => {

        console.log(`
        ID: ${flashcard.id}
        Pergunta: ${flashcard.pergunta}
        Resposta: ${flashcard.resposta}
        ID do Baralho: ${flashcard.idBaralho}
        `)
    }
)}

module.exports = listarFlashcards