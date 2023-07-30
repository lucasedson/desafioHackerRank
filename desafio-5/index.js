// calcula a diferenca do Primeiro item pros restantes

function solucao(precos) {
    let menorPerda = Infinity;
    let tempPerda = [];
    let perdas = [];
  for (i of precos){
      
      for (j of precos){
          if (i-j >= 0){
              tempPerda.push(i - j)
          }
         
      }
      
      tempPerda.shift()
      let perdaAtual = Math.min.apply(null, tempPerda)
      if (perdaAtual > 0 && perdaAtual <= menorPerda){
          perdas.push(perdaAtual)
      }
    tempPerda = []
    
          
  }
    let menorPerdaFinal = Math.min.apply(null, perdas)
    console.log(menorPerdaFinal)
}