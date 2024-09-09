const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const listarFuncionarios = require('./gerenciamentoFuncionarios/listarFuncionarios')
const criarFuncionario = require('./gerenciamentoFuncionarios/criarFuncionario')
const editarFuncionario = require('./gerenciamentoFuncionarios/editarFuncionario')
const deletarFuncionario = require('./gerenciamentoFuncionarios/deletarFuncionario')
const buscarPorSalario = require('./gerenciamentoFuncionarios/buscarPorSalario')

app.get('/funcionarios', listarFuncionarios)
app.post('/funcionario', criarFuncionario)
app.put('/funcionario/:id', editarFuncionario)
app.delete('/funcionario/:id', deletarFuncionario)
app.get('/funcionarios/salario', buscarPorSalario)


app.get('/', (req,res) => {
    res.send(`Bem vindo!`)
});

app.listen(port, () => {
    console.log(`Servidor rondando em http://localhost:${port}`)
});