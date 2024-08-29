const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numeroAleatorio = Math.floor(Math.random() * 100 + 1)
let tentativas = 0

console.log('Bem vindo!')
function numeroSorteado() {
    tentativas++
    if (tentativas <= 10){
        rl.question('Qual o palpite?', (resposta) => {
            if (resposta > 0 && resposta <= 100){
                console.log(tentativas)
                switch (true) {
                    case (numeroAleatorio > resposta):
                        console.log('Muito baixo!')
                        numeroSorteado()
                        break;
                    case (numeroAleatorio < resposta):
                        console.log('Muito alto')
                        numeroSorteado()
                        break;
                    case (numeroAleatorio == resposta):
                        console.log('Parabéns!')
                        console.log(`Você ganhou com ${tentativas} tentativas.`)
                        rl.close()
                        break;
                }
            } else {
                console.log('Invalido!')
                tentativas --
                numeroSorteado()
            }
        })    
    } else {
        console.log('Suas tentativs acabaram!')
        rl.close()
    }
}
numeroSorteado()