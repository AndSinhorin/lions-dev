let nome 
let idade 

console.log('Qual é seu nome?')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Qual a sua idade?')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade) {
    if (idade < 18){
        let menorDeIdade = (18 - idade)
        console.log(`${nome}, você vai ser maior de idade em ${menorDeIdade} anos.`)
    }   
    else {
        console.log(`${nome}, você já é maior de idade.`)
    }
}

