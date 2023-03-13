let a = document.getElementById('a');
let b = document.getElementById('b');
let resultadoSpan = document.getElementById('resultado');


addEventListener('submit', (event) => {

    event.preventDefault();
    let valorA =parseInt(a.value);
    let valorB = parseInt(b.value);
    
    resultado = (valorA + valorB);
    
    resultadoSpan.innerHTML = (`O resultado é ${resultado}`);
    console.log(resultado)
    document.title = (`O resultado é ${resultado}`);

});





