var a = 1;
var b = 2;
console.log(a); //1
if (a === 1) {
  var a = 11; // esse escopo vai ser global
  let b = 22; //esse escopo é de boloco

  console.log(a); //11
  console.log(b); //22
}
console.log(a); //11
console.log(b); //2
