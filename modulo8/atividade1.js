const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bem vindo à página inicial!');
});

app.get('/sobre', (req, res) => {
    res.send('Está é página é sobre! Este é um projeto de teste.');
});

app.use((req, res) => {
    res.status(404).send('Página não encontrada.');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});