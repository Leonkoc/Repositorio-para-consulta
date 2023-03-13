// function buscar(rg, fn) {
//   console.log(rg);
//   console.log(fn);
// }
// buscar("00182545", () => {});
//Chamei no xesque o Rg e segundo defini uma função anonima com acento ao parametro fn
//Quando dei node na aplicação apareceu isso 00182545
//[Function (anonymous)]

// function buscar(rg, fn) {
//   fn(); //Chamando a minha função que foi definido abaixo.
// }
// buscar("00182545", () => {
//   console.log("Alguumacoisa");
// });
//Não ficou bem claro ainda, vou procurar mais exemplos.
//Callback permite executar uma função depois de uma ação.
// Espero uma reposta para poder fazer uma ação, que precisa daquele retorno.
//EXemplos envio uma requisição para um servidor, mas precisamos da reposta para poder executar uma ação.
// Enquanto eu não recebo uma resposta ele não executa essa ação callback
function exibir(num) {
  console.log("A operação resultou em " + num);
}
function soma(a, b, callback) {
  var op = a + b;
  callback(op);
}
function multiplicacao(a, b, cb) {
  var op = a * b;
  cb(op);
}
soma(2, 2, exibir);
multiplicacao(2, 3, exibir);
