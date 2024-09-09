const {funcionarios} = require('../data');

const editarFuncionario = (req, res) => {
    const {id} = req.params;
    const novoNome = req.body.nome;
    const novoCargo = req.body.cargo;
    const novoDepartamento = req.body.departamento;
    const novoSalario = req.body.salario;

    const funcionario = funcionarios.find((l) => l.id == id);
//find(): método que percorre a array para encontrar o primeiro funcionário cujo id corresponde ao valor fornecido em id
//l.id: l representa o funcionário e compara seu id com o valor da variável id.
    if (!funcionario) {
        return res.status(404).send({
            message: 'Funciónario não encontrado.'
        })
    }
    funcionario.nome = novoNome;
    funcionario.cargo = novoCargo;
    funcionario.departamento = novoDepartamento;
    funcionario.salario = novoSalario
    res.status(200).send({
        message: 'Funcionário atualizado com sucesso!.',
        funcionario: funcionario
    });
}

module.exports = editarFuncionario