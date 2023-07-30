// cria uma variavel para contar os erros
// cria um laco For de palavras
//se a primeira letra da palavra for diferente da preterida
//incrementa + 1 na variavel erro


function solucao(letra, palavras) {
	//seu codigo aqui
    let contErros = 0
    for (i of palavras){
        if (i[0] !== letra){
            contErros += 1
        }
    }
    console.log(contErros)
    
}