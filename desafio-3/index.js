// Cria um for para somar o total
// Verifica se tem menos de 5 itens no array preco
// Se sim ==> retorna o total
// Se nao ==> calcula o menor preco e aplica o desconto
function solucao(precos) {
    let total = 0
    for (i of precos){
        total += i
    }

    //seu codigo aqui
    if (precos.length < 5){
        console.log(total)
        return(total)
    }
    else{
        let menorPreco = Math.min.apply(null, precos)
        let totalComDesconto = total - menorPreco
        console.log(totalComDesconto)
        return(totalComDesconto)

    }
}

precos = [100, 500, 100, 200, 50 ]

console.log(solucao(precos))