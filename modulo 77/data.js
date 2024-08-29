let baralhos = [
    {
        id: 1,
        titulo: 'JavaScript'
    },
    {
        id: 2,
        titulo: 'Visual Studio Code'
    },
    {
        id: 3,
        titulo: 'GitHub'
    }
]

let flashcard = [
    {
        id: 1,
        pergunta: 'Qual a funçao principal do JavaScript? ',
        resposta: 'É permitir que os desenvolvedores adicionem comportamento dinâmico e interatividade às páginas web.',
        idBaralho: 1
    },
    {
        id: 2,
        pergunta: 'As palavras-chave let, const e var, são usadas para que?',
        resposta: 'São usadas para declerar váriaveis. ',
        idBaralho: 1
    },
    {
        id: 3,
        pergunta: 'Qual a função do VS Code? ',
        resposta: 'A caractesrística principal é o suporte a uma ampla gama de linguagens de programação. ',
        idBaralho: 2
    },
    {
        id: 4,
        pergunta: 'O que faz o GitHub? ',
        resposta: 'Hospeda repositórios do Git e fornece ao desenvolvedores ferramentas para enviar um código melhor por meio das funcionalidades de linha de comando.',
        idBaralho: 3
    }
]
module.exports = { baralhos, flashcard }