alert("Seja bem-vindo a nav l-22");
let nomePiloto = prompt("Informe seu nome, piloto!");
let patente = prompt("Número de patente(ex: 2232): ");
confirm(`O nome do piloto é ${nomePiloto}? patente nº${patente}`);
let velocidade = 0;
let novaVelocidade = prompt("A que velocidade gostaria de começar?");
let confirmVelocidade = confirm(`Então começamos a ${novaVelocidade}Km/h?`);

if (confirmVelocidade) {
  velocidade = novaVelocidade;
}

if (velocidade <= 0) {
  alert("A nave está parada e temos missão");
} else if (velocidade <= 40) {
  alert("Estamos muito lento, considere aumentar a velocidade");
} else if (velocidade <= 80) {
  alert("Podemos manter essa velocidade nessa zona");
} else if (velocidade < 100) {
  alert("Reduza velocidade, zona de risco");
} else {
  alert("Desligamos o seu controle, reporte-se a um superior");
}
