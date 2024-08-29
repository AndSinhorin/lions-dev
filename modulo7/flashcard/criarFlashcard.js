let { flashcards } = require('../data')

function criarFlashcard(flashcard) {
    flashcard.id = flashcards.length + 1

    flashcards.push(flashcards)
}

module.exports = criarFlashcard