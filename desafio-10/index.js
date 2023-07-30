

function solucao(resultados) {
    let pontos = 0
	for (i of resultados){
        if (i == "V"){
            pontos += 3
        }
        else if (i == "E"){
            pontos += 1
        }
    }
    console.log(pontos)
}