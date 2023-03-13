const prompt = require("prompt-sync")(); //adiciona pacote para entrada de dados.
const num1 = Number(prompt("Digite 1º Número: ")); //Leitura de dados
const num2 = Number(prompt("Digite o 2º Número:"));
const soma = num1 + num2;
console.log(`Soma é: ${soma}`); //Saída de dados
