// while(expressao){
//   <bloco a ser executado>
// }

let velocidade = 50;
let aceleracao = 5;
while (velocidade <= 100) {
  console.log(`Acelerando, estamos a ${velocidade}Km/s`);
  velocidade += aceleracao; //A mesma coisa que escrever velocidade = velocidade + aceleração;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let constelacao = "Arara";
let pos = 0;
let constelacaoLength = constelacao.length;

while (pos < constelacaoLength) {
  if (constelacao[pos] == "a" || constelacao[pos] == "A") {
    console.log(pos);
  }
  pos += 1; // A mesma coisa que escrever pos = pos + 1;
}
