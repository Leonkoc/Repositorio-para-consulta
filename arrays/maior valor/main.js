//Retornar os maiores números em arrays
let numbers = [3,4,5,26,1,6,2,9];


function encontrarMaiorNumero(arr) {
let maior = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maior) {
    maior = arr[i];
    }
}
return maior;
}
let maiorNumero = encontrarMaiorNumero(numbers);
console.log(maiorNumero); 