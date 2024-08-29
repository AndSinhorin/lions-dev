let nome 
let idade 
const anoAtual = 2024

console.log('como é seu nome?')

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('qual é sua idade')

     process.stdin.once('data', function(data) {
     idade = parseInt(data.toString().trim())
     processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade) {
    let qualAnoNasceu = (anoAtual - idade)
    console.log(`Òlá ${nome}, se você ainda não fez aniversário vocẽ nasceu em ${qualAnoNasceu-1}, se você já fez aniversário você nasceu em ${qualAnoNasceu}`)
}