### Exercicio visando encontrar o maior valor em um array

## Lógica:

+ Inicialmente, consideramos o primeiro elemento do array como o maior número.
+ Então, começamos a percorrer o array a partir do segundo elemento (índice 1) até o final do array.
+ Em cada iteração, comparamos o elemento atual do array com o maior número que encontramos até agora.
+ Se o elemento atual for maior do que o maior número que encontramos até agora, atualizamos o maior número com esse elemento atual.
+ No final do loop, retornamos o maior número encontrado.

`````
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
`````