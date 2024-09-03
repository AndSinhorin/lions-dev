const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
//app.get('/') = define uma rota GET para a raiz(/) da aplicação
const criarBaralho = require('./baralho/criarBaralho');
const atualizarBaralho = require('./baralho/atualizarBaralho');
const listarBaralho = require('./baralho/listarBaralho');
const deletarBaralho = require('./baralho/deletarBaralho');

const atualizarFlashcard = require('./fleshcard/atualizarFlashcard')
const buscarFlashcardsPorBaralho = require('./fleshcard/buscarFlashcardsPorBaralho')
const buscarFlashcardsPorPergunta = require('./fleshcard/buscarFlashcardsPorPergunta')
const buscarFlashcardPorId = require('./fleshcard/buscarFlashcardPorId')
const criarFlashcard = require('./flashcard/criarFlashcard')
const deletarFlashcard = require('./flashcard/deletarFlashcard')
const listarFlashcards = require('./flashcard/listarFlashcards')

//app.post é utilizado para definir rotas que lidam com requisição HTTP do tipo POST, utilizado quando quer enviar
//dados ao servidor, como cadastros
app.post('./baralho', criarBaralho);
app.put('./baralho/:id', atualizarBaralho);
app.get('./baralho', listarBaralho);
app.delete('./baralho/:id', deletarBaralho);

//app.get é utilizado pra definir rota. É utilizada para responder uma requesição GET em uma aplicação web,
//permitindo que você especifique qual ação deve ser tomada quando uma determinada rota é acessada.
app.get('./flashcard', atualizarFlashcard);
app.get('./flashcard', criarFlashcard);
app.get('./flashcard', listarFlashcards);
app.get('./flashcard', deletarFlashcard);
app.get('./flashcard/baralho/:id', buscarFlashcardsPorBaralho);
app.get('./flashcard', buscarFlashcardsPorPergunta);
app.get('./flashcard/baralho/:idBaralho', buscarFlashcardPorId);

app.get('/', (req, res) => {
    res.send('Servidor Express está funcionando!')
})
//res.send envia uma resposta de volta ao cliente confirmando que os dados foram recebidos

//app.listen é o ponto de partida onde seu servidor Express começa a funcionar e a aceitar conexões de clientes
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
//req de (request) representa a solicitação que o cliente faz ao servidos
//req.params: parâmetros de uma rota capturado na URL 
//req.query: parâmetros de consulta 
//req.body: dados enviados no corpo da requisição
//req.headers: cabeçalhos HTTP enviados na requisição
//req.method: método HTTP usado na requisição
//req.url: URL da requisição
//req.cookies: cookies enviados com a requisição

//res representa a resposta que o servidor envia devolta ao cliente
//res.send(): envia uma resposta ao cliente
//res.json(): converte o conteúdo para JSON e define o cabeçalho de conteúdo como applicatio/json
//res.status(): cód de status HTTP da resposta(por ex, 200 para sucesso, 404 para não encontrado, 500 para erro de servido)
