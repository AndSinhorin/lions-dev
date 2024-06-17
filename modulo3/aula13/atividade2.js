let numero 

console.log('Digite um número')
process.stdin.once('data', function(data){
    numero = parseInt(data.toString().trim()) 
        processamento(numero)
        process.exit()
})

function processamento(numero) {
    if(numero%5 == 0) {
        console.log(`${numero}, é divisivel por 5.`)
    } else {
        console.log(`${numero}, não é divisivel por 5.`)
    }
}