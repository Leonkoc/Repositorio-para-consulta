alert("Bem-vindo a nave l-22");
let decolagemDataEntry = prompt("Digite a data de partida(DD/MM/YYYY");
let decolagemData = moment(decolagemDataEntry, "DD/MM/YYYY");
let hoje = moment();
let dateDiff = today - decolagemData;
let chosenOption = prompt();

if (chosenOption == "1") {
  let seconds = Math.round(dateDiff / 1000);
  alert(`Tempo até a decolagem ${seconds}segundos`);
} else if (chosenOption == "2") {
  let minutes = Math.round(dateDiff / 1000 / 60);
  alert(`Tempo até a decolagem ${minutes}minutos`);
} else if (chosenOption == "3") {
  let horas = Math.round(dateDiff / 1000 / 60 / 60);
  alert(`Tempo até a decolagem ${horas}horas`);
} else if (chosenOption == "4") {
  let dias = Math.round(dateDiff / 1000 / 60 / 60 / 24);
  alert(`Tempo até a decolagem ${dias}dias`);
} else {
  alert("Opção inválida");
}
