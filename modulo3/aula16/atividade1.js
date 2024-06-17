let numeros = [27, 10, 3, 0, 20, 5, 6, 3]
let numerosImpares = []
let numerosPares = []

numeros.push(7)
console.log(numeros)

for (let i = 0; i < numeros.length; i++){
    if(numeros[i]%2 !=0){
        numerosImpares.push(numeros[i])
    } else {
        numerosPares.push(numeros[i])
    }
}
console.log(numerosImpares)
console.log(numerosPares) 