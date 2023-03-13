let obj = {}; // Isso é um objeto;
console.log(typeof obj);
obj.name = "Maria";
console.log(obj);
obj.age = 26;
console.log(Object.values(obj));
console.log(Object.keys(obj));

let person = {
  name: "maria",
  age: 26,
  adress: "Av.pelegrini",
};

console.log(person);
person["numberOfSiblings"] = 3;

person["mon"] = "Mrian";
console.log(person);
