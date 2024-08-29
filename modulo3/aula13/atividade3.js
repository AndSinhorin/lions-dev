let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let vetorNumerosImpares = []

for (let i = 0; i < vetor.length; i++) {
    
    if (vetor[i]%2 !=0) {
        vetorNumerosImpares.push(vetor[i])
    }
}
console.log(vetorNumerosImpares)
