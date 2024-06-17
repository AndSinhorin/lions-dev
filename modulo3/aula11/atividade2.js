let num1
let num2
let operador

function calculadora (num1, num2, operador){
    switch (operador) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '/':
            return num1 / num2
        case '*':
            return nun1 * num2
        default : 
        console.log('Operador que vocẽ digitou é invalido.')
    }
}
console.log(calculadora(1,2,'+')) 