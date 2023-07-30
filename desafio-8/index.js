
function solucao(notas) {
    //seu codigo aqui
    let descarteCem = true
    let descarteQua = true
    let somaNotas = 0
    let minus = 0
    let menorNota = Math.min.apply(null, notas)
    let maiorNota = Math.max.apply(null, notas)
    for (i of notas){
        if (i == maiorNota && descarteCem == true){
            descarteCem = false
            minus += 1
        }           
    
        else if(i == menorNota && descarteQua == true){
            descarteQua = false
            minus += 1
        }
        else{
            somaNotas += i
            
        }
        
    }
    let res = somaNotas / (notas.length - minus)
    console.log(res)
   
}
    let res = somaNotas / (notas.length - 2)
    console.log(res)
   
}

notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]


solucao(notas)