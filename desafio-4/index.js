function solucao(sequencia) {
    //seu codigo
    let index = 0

    for (i of sequencia){

        if (i == ">"){
            index == 6? index = 0: index += 1
        }
        else if (i == "<"){
            index == 0 ? index = 6: index = (index -1 )

        }
    }


    console.log(index) 
    return index

}
solucao(">>>>>>>>>")
