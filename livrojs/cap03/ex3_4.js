const prompt = require("prompt-sync")();
const racao = Number(prompt("Peso da ração:"));
const consumo = Number(prompt("Consumo diário do gato: "));
const racaoGr = racao * 1000;
const duracao = Math.floor(racaoGr / consumo);
console.log(`A ração vai durar ${duracao.toFixed()} dias`);

console.log(`A nota é igual ${consumo} parabéns`);
