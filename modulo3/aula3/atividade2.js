let gostaDeCafé
let resposta

console.log('você gosta de café?')
process.stdin.once('data', function(data){
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})

function processamento(resposta) {
    if (resposta == 'sim'){
        gostaDeCafé = true
    } else if(resposta == 'não'){
        gostaDeCafé = false
    }
    if (gostaDeCafé == false) {
        console.log('Obrigado! Não gosto de café.')
    } else if (gostaDeCafé == true)
        console.log('Sim. Gosto de café.')
}