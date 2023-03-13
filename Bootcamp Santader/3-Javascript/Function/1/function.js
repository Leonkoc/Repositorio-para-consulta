function umaFuncao() {
  console.log(1);
  console.log(2);
  console.log(3);
}

umaFuncao();
//O bom de uma função é que eu posso declarar uma vez e usar essa função várias vezes.
//Posso reutilizar a mesma linha de código, sem ter que ficar reescrevendo.
umaFuncao();

function segundaFuncao() {
  console.log("String");
  return "Olá";
}
segundaFuncao();
// Até aqui ele só vai me retornar o valor do console.log()
const cumprimento = segundaFuncao();
console.log(cumprimento);
// Aqui ele guardou o valor do return em uma const e mostrou no console.log()
