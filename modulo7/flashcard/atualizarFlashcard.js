let { flashcards } = require('../data')

function atualizarFlashcard(id, novoFlashcard) {
    let index = flashcards.findIndex(flash => flash.id === id);

    flashcards[index] = {id, ...novoFlashcard}
}

module.exports = atualizarFlashcard