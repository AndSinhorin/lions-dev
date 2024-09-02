let { flashcards } = require('../data')

const atualizarFlashcard = (req, res) => {
    const {id} = req.params;
    const novaPergunta = req.body.pergunta;

    const flashcard = flashcards.find((f) => f.id == id);

    if (!flashcard) {
        return res.status(404).send({message: 'Flashcard não encopntrado.'})
    }

flashcard.pergunta = novaPergunta;
res.status(200).send({
    message: 'Baralho atualizado com seucesso!',
    flashcard: flashcard
})
}

module.exports = atualizarFlashcard;