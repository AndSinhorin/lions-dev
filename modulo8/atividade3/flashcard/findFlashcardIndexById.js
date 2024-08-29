let { flashcards } = require('../data')

function findFlashcardIndexById(id) {   
    let index = flashcards.findIndex(flashcard => flashcard.id === id)

    return index

}

module.exports = findFlashcardIndexById