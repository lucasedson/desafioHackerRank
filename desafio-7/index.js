
function solucao(disparos) {
    //seu codigo aqui
    let contador = 0
    for (i of disparos){
        if (i > 70){
            contador += 1
        }
    }
    contador >= 3 ? console.log(contador) : console.log("ELIMINADO")

}