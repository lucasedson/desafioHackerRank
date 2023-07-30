//Cria um array com caracteres proibidos
// cria uma variavel para guardar a string limpa
// Itera sobre a string corrompida verificando se o caractere eh estah contida no array proibido
// Se nao estiver contido atribui a letra para a variavel limpa

function solucao(stringCorrompida) {
    // seu codigo aqui
    const badChars = ['!','@','#', '$','%','&','*','(',')','.']
    let tempStr = ''
    for (i of stringCorrompida){
        if (!badChars.includes(i)){
            tempStr += i
        }
    }
    console.log(tempStr)
    return(tempStr)
    
}

const stringCorrompida = "*Canis %lupus )familiaris"


solucao(stringCorrompida)