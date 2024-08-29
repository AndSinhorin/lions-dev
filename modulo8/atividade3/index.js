const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const criarBaralho = require('./baralho/criarBaralho');
const atualizarBaralho = require('./baralho/atualizarBaralho');
const listarBaralho = require('./baralho/listarBaralho');
const deletarBaralho = require('./baralho/deletarBaralho');

//const atualizarFlashcard = require('./fleshcard/atualizarFlashcard')
//const buscarFlashcardsPorBaralho = require('./fleshcard/buscarFlashcardsPorBaralho')
//const buscarFlashcardsPorPergunta = require('./fleshcard/buscarFlashcardsPorPergunta')
//const criarFlashcard = require('./flashcard/criarFlashcard')
//const deletarFlashcard = require('./flashcard/deletarFlashcard')
//const findFlashcardIndexById = require('./flashcard/findFlashcardIndexById')
//const listarFlashcards = require('./flashcard/listarFlashcards')
//const listarFlashcardsPorBaralhoId = require('./flashcard/listarFlashcardsPorBaralhoId')

app.post('/baralho', criarBaralho);
app.post('/baralho/:id', atualizarBaralho);
app.post('/baralho', listarBaralho);
app.post('/baralho/:id', deletarBaralho);

app.get('/', (req, res) => {
    res.send('Servidor Express está funcionando!')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})