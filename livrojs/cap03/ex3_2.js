const prompt = require("prompt-sync")(); //Adicionando pacote ao programa
const veiculo = prompt("Veículo: "); //Entrade de dados
const preco = Number(prompt("Digite o valor do carro: "));
const entrada = preco * 0.5;
const parcela = (preco * 0.5) / 12;
console.log(`Promoção: ${veiculo}`);
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12x de R$ ${parcela.toFixed(2)}`);
