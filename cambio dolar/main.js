function converterPesos() {
    let pesosArgentinos = parseFloat(prompt("Digite a cotação do peso: "));//talvez o nome cotação fosse melhor
    let valorReais = parseFloat(prompt("Quantos reais você deseja converter?"));
    let resultado = valorReais * pesosArgentinos;//reais * cotação
    alert(`O valor convertido é de AR$ ${resultado}`);
}
converterPesos();


const comprarDolar = () => {
    let dolares = parseFloat(prompt("Digite quantos dolares você quer comprar:"));
    let cotacaoDolar = parseFloat(prompt("Qual a cotação atual do dolar?").replace(",", "."));//Caso o usuário digite 5,07 para o javascript não entender como uma string
    let resultadoCotacao = dolares * cotacaoDolar;
    alert(`Você precisa de ${resultadoCotacao} reais para comprar ${dolares} Dolares`)
}
comprarDolar();