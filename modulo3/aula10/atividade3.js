let coresFavoritas = ['preto', 'azul', 'verde']
let coresEspeciais = []
let corDoUsuario

console.log('Qual a sua cor favorita?')
 process.stdin.once('data', function(data) {
    corDoUsuario = (data, toString().trim())
    processamento(corDoUsuario)
    process.exit()
 })

 function processamento (corDoUsuario) {
    if (coresFavoritas.includes(corDoUsuario)) {
        console.log(`A sua cor favorita é uma das favoritas da turma.`) 
    } else {
        coresEspeciais.push(corDoUsuario)
        console.log(`A sua cor favorita é diferente, vamos adicionar à lista!`)
    }
    console.log(`As cores especiais são ${coresEspeciais}`)
    console.log(`As cores favotitas são ${coresFavoritas}`)
    console.log(`O vetor coresFavoritas tem ${coresFavoritas.length} posições.`)
 }
