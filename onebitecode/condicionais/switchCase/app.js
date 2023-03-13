let velocity = 100;
// ENTRE PARANTESES COLOCO A ESPRESSÃO A SER AVALIADA.
switch (velocity * 2) {
  case 100:
    console.log("Sua velocidade é 100Km/h");
    break;

  case 160:
    console.log("Sua velocidade é 160km/h");
    break;
  default:
    console.log("Velocidade não identificada, procure um mecanico");
}

let spaceship = "Golias";
switch (spaceship) {
  case "Golias":
    console.log("Você está abordo da aeronave Golias, muito resistente.");
    break;
  case "Raptor":
    console.log("Você está abordo da aeronave Raptor, muito veloz.");
    break;
  case "Enterprise":
    console.log("Você está abordo da aeronave Enterprise, frota estelar.");
    break;
  default:
    console.log("Nave não identificada,ALERTAR");
}

let velocity2 = 90;

switch (velocity2) {
  case 80:
  case 90:
  case 100:
  case 110:
    console.log("Velocidade aceitável");
    break;
  case 120:
    console.log("Velocidade alta procure diminuir essa porra.");
    break;
  default:
    console.log("Velocidade não identificada");
}
//Apartir do momento que switch encontra o seu case ele vai rodar todo os cases até encontrar um break.
