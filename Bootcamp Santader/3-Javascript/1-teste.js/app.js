const preco = 125;
const desconto = Number(prompt("digite o valor do desconto: "));
const descontoFinal = desconto / 100;
const precoFinal = preco - descontoFinal;
alert(`O valor com desconto é ${precoFinal}`);
