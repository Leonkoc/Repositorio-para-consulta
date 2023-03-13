/* for (let i = spaceshipName.length - 1; i >= 0; i--) {
  invertedName += spaceshipName[i];
}
Com isso eu consigo inverter uma string */
// i variável de controle;
// Criar referencia aos elementos html

let spaceshipName = prompt("Qual é o nome da nave?");

let invertedName = "";

for (let i = spaceshipName.length - 1; i >= 0; i--) {
  if (spaceshipName[i] == "e") {
    break;
  }
  invertedName += spaceshipName[i];
}
alert(
  `O nome original da nave: ${spaceshipName} o novo nome é ${invertedName}`
);
