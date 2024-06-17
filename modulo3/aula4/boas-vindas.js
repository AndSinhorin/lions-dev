let nome = ''
console.log("qual seu nome? ")

process.stdin.on('data', function(data) {
    let nome = data.toString()
    let mensagem = 'olá '
    let saudacao = mensagem + nome
    console.log(saudacao)
    process.exit()
})