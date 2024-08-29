let nota

console.log('Qual a nota?')
process.stdin.once('data', function(data){
    nota = parseFloat(data, toString().trim())
    console.log(`Você ficou na classificação ${classificar(nota)}.`)
    process.exit()
})

function classificar(nota){  
    switch (true) {
        case (nota >= 90 && nota <= 100):
            return 'a - aprovado'
        case (nota >= 80 && nota <= 89):
            return 'b - aprovado'
        case (nota >= 70 && nota <= 79):
            return 'c - aprovado'
        case (nota >= 60 && nota <= 69):
            return 'd - reprovado'
        case (nota >= 0 && nota <= 59):
            return 'f - reprovado'
        default:
        console.log('Nota inválida')

    }
}



