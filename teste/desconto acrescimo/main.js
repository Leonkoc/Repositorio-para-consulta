//Construa um algoritmo que leia dois números, faça um acréscimo de 30% no primeiro valor e
// Um desconto de 25% no segundo valor;


let valor1 = parseFloat(prompt("Digite o primeiro valor"));
let valor2 = parseFloat(prompt("Digite o segundo valor"));

let acresimo = (valor1 * 1.30);
let desconto = (valor2 * 0.25);
let valorDescontado = valor2 - desconto
console.log(`O Seu salário vai ficar em ${acresimo}`);
console.log(`O desconto no imposto de renda é de ${valorDescontado}`);
alert(`O Seu salário vai ficar em R$ ${acresimo} com o acréscimo de 30% e o desconto do seu imposto de renda é de R$ ${valorDescontado}`)