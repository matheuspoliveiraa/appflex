/**
 * APP FLEX
 * @author Matheus Pinheiro de Oliveira
 */

function calcular() {
    // variável etanol recebe o conteúdo da caixa input
    let etanol = frmflex.inputetanol.value
    console.log(etanol) //teste e apoio a lógica
    let gasolina = frmflex.inputgasolina.value
    console.log(gasolina) //teste e apoio a lógica

    // Processamento
    // Se valor do litro do etanol custar até 70% do valor da Gasolina abastecer com Etanol
    if (etanol < 0.7 * gasolina) {
        console.log("abasteça com etanol")
        // A linha abaixo troca a imagem no HTML
        document.getElementById("status").src="./img/etanol.png"
    } else {
        console.log("abasteça com gasolina") 
        // A linha abaixo troca a imagem no HTML
        document.getElementById("status").src="./img/gasolina.png"
    }
}

function limpar() {
    // A linha abaixo troca a imagem no HTML
    document.getElementById("status").src="/img/neutro.png"
}
