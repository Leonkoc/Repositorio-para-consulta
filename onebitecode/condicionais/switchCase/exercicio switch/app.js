let distanciaAnosLuz = prompt("Digite a distância em anos luz a ser calculada");
let opcao = prompt(
  "Qual unidade deseja converter?\n1-Parsec\n2-Unidade astronômica\n3-Quilômetros"
); // A resultante do prompt é uma string
let unidade;
let convertida;

switch (opcao) {
  case "1":
    unidade = "Parsec(pc)";
    convertida = distanciaAnosLuz * 0.306601;
    break;
  case "2":
    unidade = "Unidade astronômica";
    convertida = distanciaAnosLuz * 63241.1;
    break;
  case "3":
    unidade = "Quilômetros";
    convertida = distanciaAnosLuz * 9.5 * Math.pow(10, 12);
    break;
  default:
    unidade = "Unidade não digitada";
    convertida = "";
}

alert(
  `Você pediu para converter ${distanciaAnosLuz}anos luz em ${unidade}\n e o resultado é: ${convertida}`
);
