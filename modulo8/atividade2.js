const express = require('express');
const app = express();
const port = 3000;

//middleware para verificar o cabeçalho authorization
app.use((req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (authHeader === 'senhasecreta'){
        next();
    } else {
        res.status(403).send('Acesso negado: Token inválido!');
        throw new Error('Usuário não digitou o token corretamente');
    }
});

app.get('/protect', (req, res) => {
    res.send('Acesso autorizado! Bem vindo à área protegida.')
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});