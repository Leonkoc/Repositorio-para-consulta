let colaborador = prompt("Olá, digite o seu nome:");
let salario = parseInt(prompt("Digite o seu salário fixo:"));
let vendas = parseInt(prompt("Digite o valor de vendas do mês:"));

let comissao = (vendas * 0.15)//usar ponto, virgula o js entende como separação de argumentos.
let salarioEComissao = (salario + comissao);
alert(`Olá ${colaborador} esse mês o seu salário e comissão é de: ${salarioEComissao}`)
/*
Number()usado para converter uma string em um número.
Ele funciona de maneira semelhante a "parseInt()" e "parseFloat()", mas é mais flexível pois 
ele automaticamente detecta se o valor de entrada.
Retorna NaN (Not a Number) se o valor de entrada não puder ser convertido em um número válido.
*/

//primeiro recebei as entradas
//processei 
//e sai um resultado