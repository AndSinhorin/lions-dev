const {funcionarios} = require('../data')

const buscarPorSalario = (req, res) => {
    const {salario} = req.query;

    const resultados = funcionarios.filter(funcionario =>
        funcionario.salario == salario
    );
    if(resultados.length === 0){
        return res.status(404).send({
            message: 'Nenhum funcionário encontrado para o salário especificado.'
        })
    }
    res.status(200).send(resultados);
};

module.exports = buscarPorSalario