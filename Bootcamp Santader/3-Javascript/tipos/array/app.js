//Array é uma lista iteravel de elementos.
//array.lenght mostra o tamanho da lista// quantos items tem na lista
let array = [];
array.push(3); // add um item no final do meu array
array.push(2);
// array = [3,2]  3 na posição 0 e 2 na posição 1
array.pop(); //Tira o ultimo elemento do meu array, array = [3];
array.push(2);
array.push(5);
// array = [3,2,5]
array.shift(); // SHIFT tira o primeiro elemento da lista;
array.unshift(1); //ADD elemento como primeiro da lista;
console.log(array);
console.log(array.includes(3));
console.log(array.every((item) => item === 5)); // toda minha lista é composta por 5?
console.log(array.some((item) => item === 5)); //tem 5 na minha lista?
console.log(array.reverse());
console.log(array);
