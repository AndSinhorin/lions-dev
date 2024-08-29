let { flashcards } = require('../data')

function atualizarFlashcard(id, novoFlashcard) {
    let index = flashcards.findIndex(flash => flash.id === id);

    flashcards[index] = {id, ...novoFlashcard}
    res.status(201).send({message: 'Flashcard criado com sucesso! '})
}

module.exports = atualizarFlashcard