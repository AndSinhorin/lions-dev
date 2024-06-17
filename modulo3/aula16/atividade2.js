let notas = [4.5, 5.0, 5.8, 6.7, 7.0, 7.5, 8.2, 9.0, 9.9, 100]
let soma = 0
let media = 0
let notaAlta = notas[0]
let notaBaixa = notas[0]
let notasAcimaDaMedia = [0]
let notasAbaixoDaMedia = [0]

// calcular média
    for (let i = 0; i < notas.length; i++){
        soma = soma + notas[i] 
    }
    media = soma / notas.length

    // nota mais alta e nota mais baixa
    for (let i = 0; i < notas.length; i++){
        if (notas[i] > notaAlta) {
            notaAlta = notas[i]
        }
        if (notas[i] < notaBaixa) {
            notaBaixa = notas[i]
        } 
    }
    console.log(notaAlta)
    console.log(notaBaixa)

    // conte e exiba quantas notas estão em cima da nota calculada
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > media) {
            notasAcimaDaMedia = notasAcimaDaMedia + 1
        }
}
console.log(`O vetor notas possui ${notasAcimaDaMedia} notas acima da media ${media}`)

// Adicione uma nova nota ao array e exiba o array  atualizada.
notas.push(14)
console.log(notas)

//conte e exiba quantas notas são consideradas reprovadas (abaixo de 8.0)
for (let i = 0; i < notas.length; i++) {
    if(notas[i] < 8.0) {
        notasAbaixoDaMedia++
    }
}
console.log(notasAbaixoDaMedia)