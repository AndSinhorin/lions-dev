let num1
let num2
let operacao

function calculadora (num1, num2, operacao){
    if (operacao == '+'){
        let adicao = num1 + num2
        return adicao

    } else if (operacao == '-') {
        let subtracao = num1 - num2
        return subtracao

    } else if (operacao == '/'){
        let divisao = num1 / num2
        return divisao

    } else if (operacao == '*'){
        let multiplicacao = num1 * num2
        return multiplicacao
    } else {
        consolog.log(`O operador que você digitou é invalido.`)
    }
}

console.log(calculadora(2,3,'+'))
console.log(calculadora(2,3,'-'))
console.log(calculadora(10,15,'*'))
console.log(calculadora(30,5,'/'))