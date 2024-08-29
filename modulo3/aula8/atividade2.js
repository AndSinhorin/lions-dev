let prova1
let prova2
let notas = []
 
console.log('Qual é a primeira nota?')

process.stdin.once('data', function(data) {
    prova1 = parseFloat(data.toString().trim())
    console.log('Qual é a segunda nota?')

    process.stdin.once('data', function(data) {
        prova2 = parseFloat(data.toString().trim())
        processamento(prova1, prova2)
        process.exit()

    })
    
})

function processamento (prova1, prova2) {
    notas.push(prova1, prova2)
    let media = (notas[0] + notas[1])/2
    console.log(`a média é ${media}.`)
}


