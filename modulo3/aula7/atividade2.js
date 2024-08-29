let nome 
let idade 
const anoAtual = 2024
let jaFezAniversario
let resposta
let anoQueNasceu

console.log('como é seu nome?')

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('qual é sua idade')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        console.log('você já fez aniversário esse ano?')

        process.stdin.once('data', function(data) {
            resposta = parseInt(data.toString().trim())
            processamento(nome, idade, resposta)
            process.exit()
    
        })

    })
})

function processamento(nome, idade, resposta) {

    if (resposta == 'sim') {
        jaFezAniversario = true
    } else {
        jaFezAniversario = false
        
    }
        if (jaFezAniversario) {
            anoQueNasceu = anoAtual - idade
            console.log(`Òlá ${nome}, você nasceu em ${anoQueNasceu}`)
        } else {
            anoQueNasceu = anoAtual - idade - 1
            console.log(`Òlá ${nome}, você nasceu em ${anoQueNasceu}`)
        }
 
}

