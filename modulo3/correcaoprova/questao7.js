let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let soma
let media 
let notaMaxima = notas[0]
let notaMinima
let notasAcimaDaMedia = []
let reprovado = []

for(let i = 0; i < notas.length; i++) {
    soma = soma + notas[i]
}
    media = soma/notas.length

    console.log(media)

    for(let i = 0; i < notas.length; i++){
        if (notas[i] > notaMaxima){
            notaMaxima = notas[i]
        }
        if (notas[i] < notaMinima){
            notaMinima = notas[i]
        }
    }
    console.log(`A nota máxima é ${notaMaxima} e a nota mínima é ${notaMinima}`)
    for(let i = 0; i < notas.length; i++){
        if (notas[i] > media)
        notasAcimaDaMedia.push(notas[i])
    }
notas.push(8.0)
console.log(notas)

    for(let i = 0; i < notas.length; i++){
        if(notas[i] < 6.0){
            reprovado.push(notas[i])
        }
    }
    console.log (`O aluno reprovado tirou a nota ${reprovado}.`)
