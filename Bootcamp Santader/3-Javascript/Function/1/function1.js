//AQUI VAMOS COMO EU TIRO O CAPSLOCK PORFAVOR AHHHHHHHHHHHHH
//Aqui vamos ver como passar parâmetros para minha função.
// Os parâmetros são valores que passamos entre () e podemos utilizar dentro da minha função.
function soma(a, b) {
  return a - b;
}
const resultado = soma(10, 6);
console.log(resultado);

function soma2(x, y = 10) {
  //Aqui eu defini Y como um valor fixo;
  return x + y;
}
const resultado2 = soma2(5);
//E pedi a soma com o x valendo 5, nesse caso poderia somente alterar o valor de X;
console.log(resultado2);

// Agora veremos como passar uma função anonima para uma variável(Estou confuso não vou mentir!).
const umaFuncao = () => {
  // function
  console.log(1);
};
umaFuncao();
