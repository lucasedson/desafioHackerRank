
function solucao(palpite, palavra) {
	// seu codigo aqui
    let contador = 0
    for (i of palavra){
        if (i == palpite){
            contador += 1
        }
    }
        console.log(contador)
    
}