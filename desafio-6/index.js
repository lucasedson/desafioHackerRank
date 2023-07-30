
function solucao(primeiraLetra, segundaLetra, palavras) {
    //seu codigo aqui
    temPalavra = false
    for (i of palavras){

        if (i[0].toLowerCase() == primeiraLetra.toLowerCase() &&  i[1].toLowerCase() == segundaLetra.toLowerCase()){
            temPalavra = true
            console.log(i)
        }
    }
    if (!temPalavra){
        console.log("NENHUMA")
    }
}