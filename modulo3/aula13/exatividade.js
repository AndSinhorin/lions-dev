console.log('Qual a nota?') 
process.stdin.once('data', function(data){
    const nota = parseFloat(data, toString().trim())
    console.log(`Você ficou na classificação ${classificar(nota)}.`)
    process.exit()
})

function classificar(nota) {
    let notaClassificada
    switch (true) {
        case (nota >= 90 && nota <= 100):
            notaClassificada = 'A'
            break
        case (nota >= 80 && nota <= 89):
            notaClassificada = 'B'
            break
        case (nota >= 70 && nota <= 79):
            notaClassificada = 'C'
            break
        case (nota >= 60 && nota <= 69):
            notaClassificada = 'D'
            break
        case (nota >= 0 && nota <= 59):
            notaClassificada = 'F'
            break
    }
    return notaClassificada
}

function processamento(nota) {
    let notaClassificada = classificar(nota)
    if (notaClassificada == 'A' || notaClassificada =='B' || notaClassificada == 'C') {
        console.log(`Parabéns! Você foi aprovado a nota ${notaClassificada}`)
    } else if (notaClassificada == 'D' || notaClassificada == 'F') {
        console.log(`Infelizmente você foi reprovado com a nota ${notaClassificada}`)
    } else {
        console.log(notaClassificada)
    }
}