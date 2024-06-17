let resposta

console.log('o número é ímpar?')
process.stdin.once('data', function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})

function processamento(resposta) {
    if (resposta == 0) {
      console.log('o número que você digitou é zero.')  
    } else if (resposta %2 == 0){
       console.log('o número que você digitou é par.') 
    } else {
        console.log('o número que você digitou é ímpar.')
    }
}