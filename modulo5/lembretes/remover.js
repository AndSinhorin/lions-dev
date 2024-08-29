const {listarSeries} = require('./listar')

function removerSeries(rl, series, callback) {
    if (series.length == 0) {
        console.log('Nenhuma série adicionada ainda!')
        callback()
    } else {
        listarSeries(series)
		rl.question('Qual série deseja remover: ', (numero) => {
			if (numero > 0 && numero <= series.length) {
				series.splice(numero - 1, 1)
				console.log('Série removida!')
				callback()
			} else {
				console.log('Numero invalido, tente denovo')
				callback()
			}
		})
	}
}

module.exports = {removerSeries}