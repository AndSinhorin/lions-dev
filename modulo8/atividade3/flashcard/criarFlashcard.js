let { flashcards, baralhos } = require('../data')

function criarFlashcard(req, res) {
    console.log(req.body);
    const novoFlashcard = {
        id: flashcards.length + 1,
    };
        flashcards.push(novoFlashcard)
        res.status(201).send({
            message: 'Flashcard criado com sucesso!',
            flashcard: novoFlashcard
        });
};

module.exports = criarFlashcard